import React from 'react';
import { Link, useParams } from 'react-router-dom';

const projetos = [
  {
    id: '1',
    nome: 'Doce Sabor Confeitaria',
    categoria: 'Identidade Visual',
    desc: 'Um projeto com aromas doces, embalagem artesanal e tipografia acolhedora.',
    destaque: 'Crie aqui uma página para colocar imagens do logo, embalagens e layouts que combinam com o tema doce.',
    conceito: 'Cores cremosas, formas arredondadas e textura delicada para transmitir sabor e carinho.',
    elementos: 'Marca, embalagens, padrões e peças promocionais com presença acolhedora.',
    foco: 'Comunicação visual doce e convidativa que desperta apetite e simpatia.',
  },
  {
    id: '2',
    nome: 'TechStart',
    categoria: 'Branding & Web',
    desc: 'Marca moderna para startup de tecnologia com foco em inovação e usabilidade.',
    destaque: 'Use as caixas abaixo para trocar pelos seus arquivos de imagem, mockups ou moodboard.',
    conceito: 'Visual limpo, tipografia sans-serif e elementos geométricos que passam confiança.',
    elementos: 'Logo, paleta de cores, layout de site e interface intuitiva para produtos digitais.',
    foco: 'Posicionar a startup como inovadora, confiável e acessível para usuários modernos.',
  },
  {
    id: '3',
    nome: "Café do Zé",
    categoria: 'Embalagem & Identidade',
    desc: 'Projeto visual para cafeteria local, com foco em rótulos, copos e sinalização de loja.',
    destaque: 'Substitua esses espaços por fotos do rótulo, embalagens, cardápio e layout da loja.',
    conceito: 'Tons terrosos, textura rústica e tipografia artesanal que transmitem aconchego e autenticidade.',
    elementos: 'Rótulos, copos, sacolas, cardápio e sinalização com atmosfera artesanal.',
    foco: 'Criar identidade acolhedora que convida o público a viver a experiência da cafeteria.',
  },
  {
    id: '4',
    nome: 'Oficina Rota Certa',
    categoria: 'Identidade Visual',
    desc: 'Marca para oficina mecânica com foco em confiança, movimento e conexão local.',
    destaque: 'Use estes espaços para mostrar a nova identidade, sinalização e aplicações em veículos.',
    conceito: 'Tipografia robusta, ícones mecânicos e cores industriais para transmitir segurança.',
    elementos: 'Logo, fachada, adesivos e sinalização para veículos e ambiente da oficina.',
    foco: 'Transmitir credibilidade e dinamismo para serviços automotivos e manutenção.',
  },
  {
    id: '5',
    nome: 'Sabor Raiz',
    categoria: 'Branding & Embalagem',
    desc: 'Identidade para produtos alimentícios artesanais com pegada orgânica e tradicional.',
    destaque: 'Adicione imagens de rótulos, embalagens e composições que valorizem o sabor caseiro.',
    conceito: 'Tons naturais, texturas de papel e grafismos simples que remetem à origem do alimento.',
    elementos: 'Rótulos, embalagens, tags e materiais com estética artesanal e natural.',
    foco: 'Reforçar a origem caseira e as qualidades autênticas dos alimentos.',
  },
  {
    id: '6',
    nome: 'Casa em Dia',
    categoria: 'Interior & Social',
    desc: 'Comunicação para serviço de organização e decoração residencial, com clima acolhedor.',
    destaque: 'Inclua aqui fotos de ambientes, moodboards e peças de comunicação para clientes.',
    conceito: 'Paleta suave, layout organizado e elementos leves para transmitir bem-estar.',
    elementos: 'Identidade visual, posts, catálogos e propostas que celebram ambientes organizados.',
    foco: 'Transmitir leveza, harmonia e confiança para clientes de decoração residencial.',
  },
  {
    id: '7',
    nome: 'Ilumina Decora',
    categoria: 'Design de Marca',
    desc: 'Branding para escritório de decoração com estilo elegante e ambientação sofisticada.',
    destaque: 'Mostre o logo, aplicações de papelaria e conceitos visuais para projetos de interiores.',
    conceito: 'Cores sofisticadas, tipografia moderna e detalhes refinados para inspirar confiança.',
    elementos: 'Marca, papelaria, mockups de espaço e materiais de apresentação premium.',
    foco: 'Posicionar o escritório como referência em decoração sofisticada e inspiradora.',
  },
  {
    id: '8',
    nome: 'BioTECNO',
    categoria: 'Refrigeração Médica',
    desc: 'Soluções de refrigeração para equipamentos médicos e armazenamento sensível.',
    destaque: 'Imagens de equipamentos, embalagens isotérmicas, certificados e manuais técnicos.',
    conceito: 'Paleta burgundy com acentos laranja; tipografia robusta para transmitir confiança e tecnologia.',
    elementos: 'Equipamentos, embalagens isolantes, selos de qualidade e interface de monitoramento.',
    foco: 'Garantir percepção de segurança, precisão e conformidade para o setor médico.',
  },
  {
    id: '9',
    nome: 'Coopermil',
    categoria: 'Cooperativa Agropecuária',
    desc: 'Cooperativa com atuação em supermercados, postos de combustível e lojas agropecuárias.',
    destaque: 'Mostre aplicações em embalagens, sinalização de supermercados, postos e material para revenda.',
    conceito: 'Azul institucional, tipografia sólida e aplicações que comunicam confiança e tradição no campo.',
    elementos: 'Marca, sinalização para pontos de venda, embalagens, adesivos para caminhões e postos.',
    foco: 'Fortalecer vínculo com produtores e consumidores através de identidade clara e presença em pontos de venda.',
  },
];

function PortfolioCase() {
  const { id } = useParams();
  const projeto = projetos.find((item) => item.id === id) || projetos[0];

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
          <p>{projeto.elementos}</p>
        </div>
        <div className="card portfolio-case-panel">
          <h3>Foco</h3>
          <p>{projeto.foco}</p>
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
          ) : isCafe ? (
            <>
              <div className="card image-placeholder">Rótulo do café</div>
              <div className="card image-placeholder">Copo e embalagem térmica</div>
              <div className="card image-placeholder">Cardápio / Tipografia</div>
              <div className="card image-placeholder">Sinalização da loja</div>
              <div className="card image-placeholder">Fotografia de produto</div>
              <div className="card image-placeholder">Aplicações em merchandising</div>
            </>
          ) : isDoce ? (
            <>
              <div className="card image-placeholder">Logo & assinatura visual</div>
              <div className="card image-placeholder">Mockup de embalagem doce</div>
              <div className="card image-placeholder">Paleta de cores e texturas</div>
              <div className="card image-placeholder">Aplicação em rótulos e sacolas</div>
              <div className="card image-placeholder">Posts para redes sociais</div>
              <div className="card image-placeholder">Displays e papelaria</div>
            </>
          ) : isBio ? (
            <>
              <div className="card image-placeholder">Equipamento & painel</div>
              <div className="card image-placeholder">Mockup de embalagem isotérmica</div>
              <div className="card image-placeholder">Selo e certificação</div>
              <div className="card image-placeholder">Manual técnico / instruções</div>
              <div className="card image-placeholder">Interface de monitoramento</div>
              <div className="card image-placeholder">Aplicações em embalagens e rótulos</div>
            </>
          ) : isCoop ? (
            <>
              <div className="card image-placeholder">Marca & logotipo</div>
              <div className="card image-placeholder">Sinalização para supermercados</div>
              <div className="card image-placeholder">Adesivos e comunicação para postos</div>
              <div className="card image-placeholder">Embalagens e rótulos para revenda</div>
              <div className="card image-placeholder">Materiais promocionais e B2B</div>
              <div className="card image-placeholder">Aplicação em frotas e uniformes</div>
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
