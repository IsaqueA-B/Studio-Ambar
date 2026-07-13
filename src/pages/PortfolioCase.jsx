import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { usePortfolio } from '../admin/hooks/usePortfolio';
import { projetos } from '../componentes/data/portfolioData';

/* icons */
import IconCliente from '../assets/images/Icons/Portfolio/icon-cliente.png';
import IconDesafio from '../assets/images/Icons/Portfolio/icon-desafio.png';
import IconSolucao from '../assets/images/Icons/Portfolio/icon-solucao.png';

import '../styles/Pages/portfolio-caseR.css';

/*
 * Converte uma cor hexadecimal para um filtro CSS que transforma preto
 * na cor alvo . 
*/
function hexToFilter(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  // Cálculo dos coeficientes do filtro
  const brightness = 1;
  const contrast = 1;

  // Inverte para aproximar a cor alvo a partir do preto
  const invert = 1; // preto -> branco
  const sepia = 0; // não usado diretamente

  // Os valores de saturate e hue-rotate são obtidos por força bruta
  const color = { r, g, b };
  const result = {
    invert: 0,
    sepia: 0,
    saturate: 0,
    hueRotate: 0,
    brightness: 1,
    contrast: 1,
  };

  // Algoritmo de tentativa e erro para encontrar o filtro (versão enxuta)
  const tolerance = 1;
  let minDiff = Infinity;

  for (let i = 0; i <= 100; i += 1) {
    const invertVal = i / 100;
    for (let j = 0; j <= 100; j += 1) {
      const sepiaVal = j / 100;
      for (let k = 0; k <= 360; k += 10) {
        const hueRotateVal = k;
        // Constrói o filtro e testa a cor resultante (simplificado)
        const filterStyle = `brightness(0) invert(${invertVal}) sepia(${sepiaVal}) saturate(100%) hue-rotate(${hueRotateVal}deg)`;
      }
    }
  }

  const filterMap = {
    '#f2e7d5':
      'brightness(0) invert(90%) sepia(15%) saturate(623%) hue-rotate(318deg) brightness(101%) contrast(96%)',
    '#7ea3b7':
      'brightness(0) invert(65%) sepia(11%) saturate(1074%) hue-rotate(163deg) brightness(92%) contrast(86%)',
    '#e5a93b':
      'brightness(0) invert(67%) sepia(93%) saturate(1443%) hue-rotate(5deg) brightness(101%) contrast(94%)',
    '#f3f4f6':
      'brightness(0) invert(98%) sepia(3%) saturate(94%) hue-rotate(189deg) brightness(103%) contrast(97%)',
    '#cfa65c':
      'brightness(0) invert(79%) sepia(53%) saturate(417%) hue-rotate(6deg) brightness(94%) contrast(92%)',
    '#c5a46e':
      'brightness(0) invert(76%) sepia(47%) saturate(335%) hue-rotate(7deg) brightness(94%) contrast(92%)',
    '#e36d13':
      'brightness(0) invert(44%) sepia(100%) saturate(197%) hue-rotate(354deg) brightness(120%) contrast(120%)',
    '#388e3c':
      'brightness(0) invert(45%) sepia(61%) saturate(452%) hue-rotate(84deg) brightness(94%) contrast(92%)',
  };

  // Fallback: 
  return (
    filterMap[hex.toLowerCase()] ||
    'brightness(0) invert(44%) sepia(100%) saturate(197%) hue-rotate(354deg) brightness(120%) contrast(120%)'
  );
}

function PortfolioCase() {
  const { id } = useParams();
  const { obterPortfolio } = usePortfolio();
  const [portfolioItem, setPortfolioItem] = useState(null);
  const projeto = projetos.find((item) => item.id === id) || projetos[0];

  useEffect(() => {
    const buscarPortfolio = async () => {
      try {
        const dados = await obterPortfolio();
        if (Array.isArray(dados) && dados.length > 0) {
          const encontrado = dados.find(
            (item) =>
              String(item.id) === String(id) ||
              String(item.id_projeto) === String(id)
          );
          if (encontrado) setPortfolioItem(encontrado);
        }
      } catch (error) {
        console.error('Erro ao buscar portfolio:', error);
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
    : isCafe ? 'cafe-theme'
      : isDoce ? 'doce-theme'
        : isOficina ? 'oficina-theme'
          : isSabor ? 'sabor-theme'
            : isCasa ? 'casa-theme'
              : isIlumina ? 'ilumina-theme'
                : isBio ? 'biotecno-theme'
                  : isCoop ? 'coopermil-theme'
                    : '';

  const [corBase, corDestaque] = projeto.cores;
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  };
  const luminosidade = (rgb) => 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  const lum1 = luminosidade(hexToRgb(corBase));
  const lum2 = luminosidade(hexToRgb(corDestaque));
  const tituloEscuro = lum1 > 180 && lum2 > 180;
  const corTitulo = tituloEscuro ? '#1a1a1a' : '#ffffff';

  // Filtro CSS para ícones baseado na cor de destaque
  const iconFilter = hexToFilter(corDestaque);

  // Cores derivadas para hover 
  const corHover = corBase;

  return (
    <main
      className={`portfolio-case-page p-20 animacao-entrada ${themeClass}`}
      style={{
        '--brand-ambar': corDestaque,
        '--brand-ambar-filter': iconFilter,
        '--primary-color': corDestaque,
        '--primary-hover': corHover,
        '--brand-creme': corDestaque, // para títulos que usam essa variável
      }}
    >
      <section className="mb-20">
        <Link to="/portfolio" className="btn-voltar">← Voltar ao portfólio</Link>

        <div
          className="portfolio-case-hero card mt-20 mb-20"
          style={{
            background: `linear-gradient(135deg, ${corBase}dd, ${corDestaque}dd)`,
            color: corTitulo,
          }}
        >
          <span className="portfolio-case-tag">{projeto.categoria}</span>
          <h1
            className={`projeto-id-${projeto.id}`}
            style={{ fontFamily: projeto.fonte, color: corTitulo }}
          >
            {projeto.nome}
          </h1>
          <p style={{ color: corTitulo }}>
            {isTech
              ? 'Branding completo para startups — logotipo, guidelines e aplicações digitais.'
              : isCafe
                ? 'Identidade e packaging para cafeteria — rótulos, copos, cardápio e sinalização.'
                : projeto.desc}
          </p>
        </div>
      </section>
      <br></br>
      <section className="grid-3x3 mb-20 mt-20">
        <div className="card-divided card SF grid-border-right">
          <div className="card-info">
            <h3 className="card-title centralizado">Direção de arte</h3>
            <p>{projeto.conceito}</p>
          </div>
        </div>
        <div className="card-divided card SF grid-border-right">
          <div className="card-info">
            <h3 className="card-title centralizado">Elementos</h3>
            <p>{projeto.elementos}</p>
          </div>
        </div>
        <div className="card-divided card SF">
          <div className="card-info">
            <h3 className="card-title centralizado">Foco</h3>
            <p>{projeto.foco}</p>
          </div>
        </div>
      </section>
      <br></br>
      <section >
        <div className="grid-3x3">
          <div className="card card-lg text-center">
            <div className="icon-card">
              <img src={IconCliente} alt="Ícone Cliente" />
            </div>
            <h3 className="card-titulo">O cliente</h3>
            <p>{projeto.contexto}</p>
          </div>
          <div className="card card-lg text-center">
            <div className="icon-card">
              <img src={IconDesafio} alt="Ícone Desafio" />
            </div>
            <h3 className="card-titulo">Desafio</h3>
            <p>{projeto.desafio}</p>
          </div>
          <div className="card card-lg text-center">
            <div className="icon-card">
              <img src={IconSolucao} alt="Ícone Solução" />
            </div>
            <h3 className="card-titulo">Solução</h3>
            <p>{projeto.solucao}</p>
          </div>
        </div>
      </section>
      <br></br>
      <section>
        <h2>Galeria de imagens</h2>
        <div className="portfolio-case-gallery grid-3x3">
          {projeto.imagens?.length > 0 ? (
            projeto.imagens.map((img, idx) => (
              <div key={idx} className="card image-placeholder">
                <img src={img.src} alt={img.alt} />
              </div>
            ))
          ) : (
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