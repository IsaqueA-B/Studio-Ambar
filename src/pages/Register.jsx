import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../componentes/users/UserContext';
import { aplicarMascaraCPF } from '../componentes/users/auth';

function Register() {
    const { register } = useUser();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nome: '',
        cpf: '',
        email: '',
        senha: ''
    });
    const [termos, setTermos] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'cpf') {
            setForm({ ...form, cpf: aplicarMascaraCPF(value) });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!termos) {
            alert('Aceite os termos de uso.');
            return;
        }
        const resultado = register(form);
        if (resultado.sucesso) {
            navigate('/');
        } else {
            alert(resultado.mensagem);
        }
    };

    return (
        <main className="p-20">
            <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <h1 className="text-center">Criar Conta</h1>
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
            </div>
        </main>
    );
}

export default Register;