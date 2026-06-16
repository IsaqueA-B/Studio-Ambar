import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../componentes/users/UserContext';
import { aplicarMascaraCPF } from '../componentes/users/auth';

function Login() {
    const { login } = useUser();
    const navigate = useNavigate();
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
            </div>
        </main>
    );
}

export default Login;