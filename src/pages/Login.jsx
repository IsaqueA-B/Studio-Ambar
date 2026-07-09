import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../componentes/users/UserContext';

function Login() {
    const { login } = useUser();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro('');
        try {
            await login(email, senha);
            navigate('/admin');  // ou '/', conforme sua lógica
        } catch (error) {
            setErro(error.message);
        }
    };

    return (
        <main className="p-20">
            <div className="card" style={{ maxWidth: '450px', margin: '0 auto' }}>
                <h1 className="text-center">Entrar</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
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
                    {erro && <p className="erro">{erro}</p>}
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