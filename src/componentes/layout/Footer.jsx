import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Especificos/LogoCompleta.png';

// Icons da navegação
import iconContato from '../../assets/images/Icons/Nav_Footer/icon-contato.png';
import iconEmail from '../../assets/images/Icons/Nav_Footer/icon-email.png';
import iconLocalizacao from '../../assets/images/Icons/Nav_Footer/icon-localizacao.png';
import iconRedes from '../../assets/images/Icons/Nav_Footer/icon-redes.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">

                {/* Coluna 1 - Logo e descrição */}
                <div className="footer-col">
                    <img src={logo} alt="Studio Ambar" className="footer-logo" />
                    <p className="footer-description">
                        Combinamos estratégia, estética e propósito para criar marcas
                        memoráveis e soluções digitais que conectam pessoas e impulsionam
                        negócios.
                    </p>
                </div>

                {/* Coluna 2 - Navegação */}
                <div className="footer-col">
                    <h4 className="footer-title">Navegação</h4>
                    <ul className="footer-links">
                        <li>
                            <NavLink to="/" className="btn-link">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobre" className="btn-link">Sobre</NavLink>
                        </li>
                        <li>
                            <NavLink to="/servicos" className="btn-link">Serviços</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" className="btn-link">Portfólio</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Coluna 3 - Mais Links */}
                <div className="footer-col">
                    <h4 className="footer-title">Mais Links</h4>
                    <ul className="footer-links">
                        <li>
                            <NavLink to="/blog" className="btn-link">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contato" className="btn-link">Contato</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Coluna 4 - Contato */}
                <div className="footer-col">
                    <h4 className="footer-title">Contato</h4>
                    <ul className="footer-contact-list">
                        <li className="footer-contact-item">
                            <img src={iconLocalizacao} alt="" className="footer-icon" />
                            <span>Santa Rosa - RS</span>
                        </li>
                        <li className="footer-contact-item">
                            <img src={iconEmail} alt="" className="footer-icon" />
                            <a href="mailto:contato@studio.ambar">contato@studio.ambar</a>
                        </li>
                        <li className="footer-contact-item">
                            <img src={iconContato} alt="" className="footer-icon" />
                            <a href="tel:+5555999999999">(55) 99196-6173</a>
                        </li>
                        <li className="footer-contact-item">
                            <img src={iconRedes} alt="" className="footer-icon" />
                            <a
                                href="https://instagram.com/studio.ambar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @studio.ambar
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Linha inferior opcional */}
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Studio Ambar. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;