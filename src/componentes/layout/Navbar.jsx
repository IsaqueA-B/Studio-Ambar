import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../users/UserContext';
import Logo from './Logo';
import iconeSair from '../../assets/images/btn-sair.png';

function Navbar() {
    const { user, logout } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Logo />
            </div>

            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/teste">Exemplos</Link></li>
                <li><Link to="/projeto">Projeto</Link></li>
            </ul>

            <div className="navbar-right">
                {user ? (
                    <>
                        <span className="user-nome">{user.nome}</span>
                        <button onClick={handleLogout} className="btn-sair">
                            <img src={iconeSair} alt="Sair" className="btn-sair-icone" />
                            Sair
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="btn-sair" style={{ textDecoration: 'none' }}>
                        Entrar
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;