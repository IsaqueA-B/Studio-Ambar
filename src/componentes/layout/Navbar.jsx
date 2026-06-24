import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../users/UserContext';
import logo1 from '../../assets/images/Especificos/Logo1.png';
import iconeSair from '../../assets/images/Icons/btn-sair.png';

// -------------------- ÍCONES DA SIDEBAR --------------------
import iconSobre from '../../assets/images/Icons/icon-sobre.png';
import iconServicos from '../../assets/images/Icons/icon-servicos.png';
import iconPortfolio from '../../assets/images/Icons/icon-portfolio.png';
import iconCases from '../../assets/images/Icons/icon-cases.png';
import iconBlog from '../../assets/images/Icons/icon-blog.png';
import iconContato from '../../assets/images/Icons/icon-contato.png';
// -----------------------------------------------------------

function Navbar() {
    const { user, logout } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <aside className="sidebar">
            {/* Logo clicável -> Home */}
            <Link to="/" className="sidebar-logo">
                <img src={logo1} alt="Studio Âmbar" />
            </Link>

            {/* Navegação principal */}
            <nav className="sidebar-nav">
                <ul className="sidebar-links">
                    <li>
                        <Link to="/sobre">
                            <img src={iconSobre} alt="" className="sidebar-icon" />
                            <span>Sobre</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/servicos">
                            <img src={iconServicos} alt="" className="sidebar-icon" />
                            <span>Serviços</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio">
                            <img src={iconPortfolio} alt="" className="sidebar-icon" />
                            <span>Portfólio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">
                            <img src={iconBlog} alt="" className="sidebar-icon" />
                            <span>Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contato">
                            <img src={iconContato} alt="" className="sidebar-icon" />
                            <span>Contato</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Área do usuário (fixa no rodapé da sidebar) */}
            <div className="sidebar-user">
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
        </aside>
    );
}

export default Navbar;