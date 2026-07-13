import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUsuarios } from '../admin/hooks/useUsuarios';
import { aplicarMascaraCPF } from '../componentes/users/Mascaras';
import IconVer from "../assets/images/Icons/Register/icon-ver.png";

function Register() {
    const { criar } = useUsuarios();
    const navigate = useNavigate();
    const [form, setForm] = useState({ nome: '', cpf: '', email: '', senha: '' });
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [termos, setTermos] = useState(false);
    const [erro, setErro] = useState('');

    // Controle de visibilidade das senhas
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

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
        setErro('');

        if (!termos) {
            setErro('Aceite os termos de uso.');
            return;
        }

        // Validação de confirmação de senha (apenas front-end)
        if (form.senha !== confirmarSenha) {
            setErro('As senhas não coincidem.');
            return;
        }

        const cpfLimpo = form.cpf.replace(/\D/g, '');
        if (cpfLimpo.length !== 11) {
            setErro('CPF deve ter 11 dígitos.');
            return;
        }

        try {
            await criar(form.nome, form.email, form.senha, 'visualizador', cpfLimpo);
            alert('Conta criada com sucesso! Faça login.');
            navigate('/login');
        } catch (error) {
            setErro('Erro ao criar conta. Verifique os dados.');
        }
    };

    return (
        <main className="p-20">
            <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <h1 className="text-center">Cadastrar</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome completo</label>
                        <input name="nome" value={form.nome} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>CPF</label>
                        <input name="cpf" value={form.cpf} onChange={handleChange} placeholder="000.000.000-00" maxLength={14} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required />
                    </div>

                    {/* Campo Senha com ícone */}
                    <div className="form-group">
                        <label>Senha</label>
                        <div className="input-password-wrapper">
                            <input
                                name="senha"
                                type={mostrarSenha ? 'text' : 'password'}
                                value={form.senha}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                className="input-password-toggle"
                                onMouseDown={() => setMostrarSenha(true)}
                                onMouseUp={() => setMostrarSenha(false)}
                                onMouseLeave={() => setMostrarSenha(false)}
                                onTouchStart={() => setMostrarSenha(true)}
                                onTouchEnd={() => setMostrarSenha(false)}
                                aria-label="Mostrar senha"
                            >
                                <img src={IconVer} alt="olho" className="input-password-icon" />
                            </button>
                        </div>
                    </div>

                    {/* Campo Confirmar Senha com ícone */}
                    <div className="form-group">
                        <label>Confirmar Senha</label>
                        <div className="input-password-wrapper">
                            <input
                                type={mostrarConfirmacao ? 'text' : 'password'}
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="input-password-toggle"
                                onMouseDown={() => setMostrarConfirmacao(true)}
                                onMouseUp={() => setMostrarConfirmacao(false)}
                                onMouseLeave={() => setMostrarConfirmacao(false)}
                                onTouchStart={() => setMostrarConfirmacao(true)}
                                onTouchEnd={() => setMostrarConfirmacao(false)}
                                aria-label="Mostrar confirmação de senha"
                            >
                                <img src={IconVer} alt="olho" className="input-password-icon" />
                            </button>
                        </div>
                    </div>

                    <div className="form-group checkbox-group">
                        <input type="checkbox" id="termos" checked={termos} onChange={(e) => setTermos(e.target.checked)} />
                        <label htmlFor="termos">Aceito os termos de uso e política de privacidade</label>
                    </div>
                    {erro && <p className="erro">{erro}</p>}
                    <button type="submit" className="btn w-100">Cadastrar</button>
                </form>
                <p className="text-center mt-20">
                    Já tem conta? <Link to="/login">Faça login</Link>
                </p>
            </div>
        </main>
    );
}

export default Register;