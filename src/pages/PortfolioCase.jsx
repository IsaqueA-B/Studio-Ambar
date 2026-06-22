import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/portfolio-case.css';

const projetos = [
  {
    id: '1',
    nome: 'Doce Sabor Confeitaria',
    categoria: 'Identidade Visual',
    desc: 'Um projeto com aromas doces, embalagem artesanal e tipografia acolhedora.',
    destaque: 'Crie aqui uma página para colocar imagens do logo, embalagens e layouts que combinam com o tema doce.',
    conceito: 'Cores cremosas, formas arredondadas e textura delicada para transmitir sabor e carinho.',
  },
  {
    id: '2',
    nome: 'TechStart',
    categoria: 'Branding & Web',
    desc: 'Marca moderna para startup de tecnologia com foco em inovação e usabilidade.',
    destaque: 'Use as caixas abaixo para trocar pelos seus arquivos de imagem, mockups ou moodboard.',
    conceito: 'Visual limpo, tipografia sans-serif e elementos geométricos que passam confiança.',
  },
];

function PortfolioCase() {
  const { id } = useParams();
  const projeto = projetos.find((item) => item.id === id) || projetos[0];

  const isTech = projeto.id === '2';

  return (
    <main className={`p-20 animacao-entrada ${isTech ? 'tech-theme' : ''}`}>
      <section className="mb-20">
          <Link to="/portfolio" className="btn-voltar">← Voltar ao portfólio</Link>
        <div className={`portfolio-case-hero card mt-20 ${isTech ? 'portfolio-tech-hero' : ''}`}>
          <span className="portfolio-case-tag">{projeto.categoria}</span>
          <h1>{projeto.nome}</h1>
          <p>{isTech ? 'Branding completo para startups — logotipo, guidelines e aplicações digitais.' : projeto.desc}</p>
          <p className="portfolio-case-highlight">{projeto.destaque}</p>
        </div>
      </section>

      <section className="portfolio-case-info grid-3x3 mb-20">
        <div className="card portfolio-case-panel">
          <h3>Direção de arte</h3>
          <p>{projeto.conceito}</p>
        </div>
        <div className="card portfolio-case-panel">
          <h3>Elementos</h3>
          <p>Logo, paleta de cores, padrões e embalagens com presença visual quente e acolhedora.</p>
        </div>
        <div className="card portfolio-case-panel">
          <h3>Foco</h3>
          <p>Experiência visual que comunica doçura, confiança e personalidade única.</p>
        </div>
      </section>

      <section>
        <h2>Galeria de imagens</h2>
        <p>Substitua esses espaços pelas fotos e layouts que representam melhor o projeto.</p>
        <div className="portfolio-case-gallery grid-3x3">
          {isTech ? (
            <>
              <div className="card image-placeholder">Logo & símbolo</div>
              <div className="card image-placeholder">Dashboard UI / Mockup</div>
              <div className="card image-placeholder">Paleta & ícones</div>
              <div className="card image-placeholder">Guidelines / Tipografia</div>
              <div className="card image-placeholder">Aplicação em website</div>
              <div className="card image-placeholder">Mockups de apresentação</div>
            </>
          ) : (
            <>
              <div className="card image-placeholder">Imagem do logo</div>
              <div className="card image-placeholder">Mockup de embalagem</div>
              <div className="card image-placeholder">Paleta de cores</div>
              <div className="card image-placeholder">Material de ponto de venda</div>
              <div className="card image-placeholder">Arte de redes sociais</div>
              <div className="card image-placeholder">Aplicação em papelaria</div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default PortfolioCase;
