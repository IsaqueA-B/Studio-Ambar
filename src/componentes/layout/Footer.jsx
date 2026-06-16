import React from 'react';

const Footer = () => {
  const ano = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-coluna">
          <h4>Responsável</h4>
          <p>Nome do Responsável</p>
          <p>Telefone: (11) 99999-9999</p>
        </div>
        <div className="footer-coluna">
          <h4>Empresa / Desenvolvedora</h4>
          <p>Nome da Empresa</p>
          <p>CNPJ: 00.000.000/0000-00</p>
        </div>
        <div className="footer-coluna">
          <h4>Contato de Ajuda</h4>
          <p>Telefone: (11) 3333-3333</p>
          <p>Email: suporte@exemplo.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {ano} – Nome do Projeto. Todos os direitos reservados.</p>
        <p>
          <a href="/politica">Política de Privacidade</a> |
          <a href="/termos"> Termos de Uso</a>
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;
