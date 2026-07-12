import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { usePortfolio } from '../admin/hooks/usePortfolio';
import { projetos } from '../componentes/data/portfolioData'

function PortfolioCase() {
  const { id } = useParams();
  const { obterPortfolio } = usePortfolio();
  const [portfolioItem, setPortfolioItem] = useState(null);
  const projeto = projetos.find((item) => item.id === id) || projetos[0];

  useEffect(() => {
    const buscarPortfolio = async () => {
      try {
        const dados = await obterPortfolio();

        // Validar se dados é um array antes de usar find()
        if (Array.isArray(dados) && dados.length > 0) {
          const encontrado = dados.find(
            (item) => String(item.id) === String(id) || String(item.id_projeto) === String(id)
          );
          if (encontrado) {
            setPortfolioItem(encontrado);
          }
        }
      } catch (error) {
        console.error('Erro ao buscar portfolio:', error);
        // Falha silenciosamente - usa dados estáticos
      }
    };

    buscarPortfolio();
  }, [id, obterPortfolio]);

  const isTech = projeto.id === '2';
  const isCafe = projeto.id === '3';
  const isDoce = projeto.id === '1';
  const isOficina = projeto.id === '4';
  const isSabor = projeto.id === '5';
  const isCasa = projeto.id === '6';
  const isIlumina = projeto.id === '7';
  const isBio = projeto.id === '8';
  const isCoop = projeto.id === '9';

  const themeClass = isTech
    ? 'tech-theme'
    : isCafe
      ? 'cafe-theme'
      : isDoce
        ? 'doce-theme'
        : isOficina
          ? 'oficina-theme'
          : isSabor
            ? 'sabor-theme'
            : isCasa
              ? 'casa-theme'
              : isIlumina
                ? 'ilumina-theme'
                : isBio
                  ? 'biotecno-theme'
                  : isCoop
                    ? 'coopermil-theme'
                    : '';

  return (
    <main className={`p-20 animacao-entrada ${themeClass}`}>
      <section className="mb-20">
        <Link to="/portfolio" className="btn-voltar">← Voltar ao portfólio</Link>
        <div className={`portfolio-case-hero card mt-20 ${isTech ? 'portfolio-tech-hero' : ''}`}>
          <span className="portfolio-case-tag">{projeto.categoria}</span>
          <h1>{projeto.nome}</h1>
          <p>
            {isTech
              ? 'Branding completo para startups — logotipo, guidelines e aplicações digitais.'
              : isCafe
                ? 'Identidade e packaging para cafeteria — rótulos, copos, cardápio e sinalização.'
                : projeto.desc}
          </p>
          <p className="portfolio-case-highlight">{portfolioItem ? `Item carregado do banco: ${portfolioItem.titulo}` : projeto.destaque}</p>
        </div>
      </section>

      <section className="portfolio-case-info grid-3x3 mb-20">
        <div className="card portfolio-case-panel">
          <h3>Direção de arte</h3>
          <p>{projeto.conceito}</p>
        </div>
        <div className="card portfolio-case-panel">
          <h3>Elementos</h3>
          <p>{projeto.elementos}</p>
        </div>
        <div className="card portfolio-case-panel">
          <h3>Foco</h3>
          <p>{projeto.foco}</p>
        </div>
      </section>

      {portfolioItem && (
        <section className="mb-20">
          <div className="card">
            <h3>Dados vindos do banco</h3>
            <p><strong>Título:</strong> {portfolioItem.titulo}</p>
            <p>{portfolioItem.descricao}</p>
          </div>
        </section>
      )}

<section className="portfolio-case-contexto mb-20">
  <div className="card">
    <h2>O cliente</h2>
    <p>{projeto.contexto}</p>
  </div>
  <div className="card mt-20">
    <h2>Desafio</h2>
    <p>{projeto.desafio}</p>
  </div>
  <div className="card mt-20">
    <h2>Solução</h2>
    <p>{projeto.solucao}</p>
  </div>
</section>

<section>
  <h2>Galeria de imagens</h2>
  <p>Substitua esses espaços pelas fotos e layouts que representam melhor o projeto.</p>
  <div className="portfolio-case-gallery grid-3x3">
    {projeto.imagens?.length > 0 ? (
      projeto.imagens.map((img, idx) => (
        <div key={idx} className="card image-placeholder">
          <img src={img.src} alt={img.alt} />
        </div>
      ))
    ) : (
      // Fallback genérico caso não tenha imagens definidas
      <>
        <div className="card image-placeholder">Imagem 1</div>
        <div className="card image-placeholder">Imagem 2</div>
        <div className="card image-placeholder">Imagem 3</div>
      </>
    )}
    
  </div>
</section>
</main>
    );
}

export default PortfolioCase;
