import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../componentes/users/UserContext';
import { aplicarMascaraCPF } from '../componentes/users/auth';
import { useUsuarios } from '../hooks/useUsuarios';

function Login() {
    const { login } = useUser();
    const { obterUsuarios } = useUsuarios();
    const navigate = useNavigate();
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [usuariosBanco, setUsuariosBanco] = useState([]);

    useEffect(() => {
        const carregarUsuarios = async () => {
            try {
                const dados = await obterUsuarios();
                setUsuariosBanco(Array.isArray(dados) ? dados : []);
            } catch (error) {
                console.error(error);
            }
        };

        carregarUsuarios();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Tenta autenticar no banco primeiro
            const cpfLimpo = cpf.replace(/\D/g, '');
            const resposta = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cpf: cpfLimpo, senha })
            });

            if (resposta.ok) {
                const usuario = await resposta.json();
                console.log('✅ Login no banco com sucesso');
                localStorage.setItem('currentUser', JSON.stringify(usuario));
                navigate('/');
                return;
            } else {
                console.warn('❌ Banco retornou erro:', resposta.status);
            }
        } catch {
            console.warn('⚠️ Banco indisponível, tentando localStorage');
        }

        // Fallback: usa localStorage
        if (login(cpf, senha)) {
            navigate('/');
        } else {
            alert('CPF ou senha incorretos.');
        }
    };

    return (
        <main className="p-20">
            <div className="card" style={{ maxWidth: '450px', margin: '0 auto' }}>
                <h1 className="text-center">Entrar</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>CPF</label>
                        <input
                            value={cpf}
                            onChange={(e) => setCpf(aplicarMascaraCPF(e.target.value))}
                            placeholder="000.000.000-00"
                            maxLength={14}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn w-100">Entrar</button>
                </form>
                <p className="text-center mt-20">
                    Não tem conta? <Link to="/register">Cadastre-se</Link>
                </p>
                <p className="text-center mt-10">Usuários carregados do banco: {usuariosBanco.length}</p>
            </div>
        </main>
    );
}

export default Login;