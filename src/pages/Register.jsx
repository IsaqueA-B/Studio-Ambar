import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../componentes/users/UserContext';
import { aplicarMascaraCPF } from '../componentes/users/auth';
import { useUsuarios } from '../hooks/useUsuarios';

function Register() {
    const { register } = useUser();
    const { obterUsuarios, criar } = useUsuarios();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nome: '',
        cpf: '',
        email: '',
        senha: ''
    });
    const [termos, setTermos] = useState(false);
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'cpf') {
            setForm({ ...form, cpf: aplicarMascaraCPF(value) });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!termos) {
            alert('Aceite os termos de uso.');
            return;
        }
        
        // Remover máscara do CPF antes de enviar
        const cpfLimpo = form.cpf.replace(/\D/g, '');
        if (cpfLimpo.length !== 11) {
            alert('CPF deve ter 11 dígitos');
            return;
        }
        
        const resultado = register(form);
        if (resultado.sucesso) {
            try {
                await criar(form.nome, form.email, form.senha, 'visualizador', cpfLimpo);
            } catch (error) {
                console.error(error);
            }
            navigate('/');
        } else {
            alert(resultado.mensagem);
        }
    };

    return (
        <main className="p-20">
            <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <h2 className="centralizado sem-linha">Criar Conta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome completo</label>
                        <input name="nome" value={form.nome} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>CPF</label>
                        <input name="cpf" value={form.cpf} onChange={handleChange} placeholder="000.000.000-00" maxLength={14} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="exemplo@gmail.com" required />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input name="senha" type="password" value={form.senha} onChange={handleChange} required />
                    </div>
                    <div className="form-group checkbox-group">
                        <input type="checkbox" id="termos" checked={termos} onChange={(e) => setTermos(e.target.checked)} />
                        <label htmlFor="termos">Aceito os termos de uso e política de privacidade</label>
                    </div>
                    <button type="submit" className="btn w-100">Cadastrar</button>
                </form>
                <p className="text-center mt-20">
                    Já tem conta? <Link to="/login">Faça login</Link>
                </p>
                <p className="text-center mt-10">Usuários carregados do banco: {usuariosBanco.length}</p>
            </div>
        </main>
    );
}

export default Register;