import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useUser } from '../users/UserContext';
import logo1 from '../../assets/images/Especificos/Logo1.png';
import iconeSair from '../../assets/images/Icons/btn-sair.png';

// -------------------- ÍCONES DA SIDEBAR --------------------
import iconHome from '../../assets/images/Icons/icon-home.png';
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
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                            <img src={iconHome} alt="" className="sidebar-icon" />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                            <img src={iconSobre} alt="" className="sidebar-icon" />
                            <span>Sobre</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                            <img src={iconServicos} alt="" className="sidebar-icon" />
                            <span>Serviços</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                            <img src={iconPortfolio} alt="" className="sidebar-icon" />
                            <span>Portfólio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                            <img src={iconBlog} alt="" className="sidebar-icon" />
                            <span>Blog</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contato" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                            <img src={iconContato} alt="" className="sidebar-icon" />
                            <span>Contato</span>
                        </NavLink>
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