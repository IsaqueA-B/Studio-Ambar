import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../hooks/usePortfolio';

// --- CONFIGURAÇÕES E DADOS ESTÁTICOS ---
const PROJETOS_ESTATICOS = [
  { id: 1, nome: 'Doce Sabor Confeitaria', categoria: 'Identidade Visual', desc: 'Nova identidade e embalagens.' },
  { id: 2, nome: 'TechStart', categoria: 'Branding & Web', desc: 'Marca e site institucional.' },
  { id: 3, nome: 'Café do Zé', categoria: 'Logo & Social', desc: 'Logo e templates para redes sociais.' },
  { id: 4, nome: 'Oficina Rota Certa', categoria: 'Identidade Visual', desc: 'Marca para oficina mecânica com foco em confiança e movimentação.' },
  { id: 5, nome: 'Sabor Raiz', categoria: 'Branding & Embalagem', desc: 'Projeto para linha de alimentos artesanais com sabor caseiro.' },
  { id: 6, nome: 'Casa em Dia', categoria: 'Interior & Social', desc: 'Identidade visual para serviços de organização e decoração residencial.' },
  { id: 7, nome: 'Ilumina Decora', categoria: 'Design de Marca', desc: 'Branding para escritório de decoração com estilo elegante e contemporâneo.' },
  { id: 8, nome: 'BioTECNO', categoria: 'Refrigeração Médica', desc: 'Soluções de refrigeração para equipamentos médicos e armazenamento sensível.' },
  { id: 9, nome: 'Coopermil', categoria: 'Cooperativa Agropecuária', desc: 'Atuação em supermercados, postos e lojas agropecuárias.' },
];

const FILTROS_DISPONIVEIS = [
  'Todos', 'Identidade Visual', 'Social Media', 'Web', 
  'Saúde', 'Alimentação', 'Comércio', 'Automóveis'
];

// --- FUNÇÕES AUXILIARES DE FILTRAGEM ---
const verificarCorrespondenciaFiltro = (projeto, filtro) => {
  if (filtro === 'Todos') return true;

  const textoBusca = `${projeto.categoria || ''} ${projeto.nome || ''} ${projeto.desc || ''}`.toLowerCase();

  switch (filtro) {
    case 'Identidade Visual':
      return textoBusca.includes('identidade') || textoBusca.includes('identit');
    case 'Social Media':
      return textoBusca.includes('social') || textoBusca.includes('mídia') || textoBusca.includes('media');
    case 'Web':
      return textoBusca.includes('web') || textoBusca.includes('site');
    case 'Saúde':
      return textoBusca.includes('refrigera') || textoBusca.includes('médica') || textoBusca.includes('saúde') || textoBusca.includes('medical');
    case 'Alimentação':
      return textoBusca.includes('sabor') || textoBusca.includes('aliment') || textoBusca.includes('food') || textoBusca.includes('comida') || textoBusca.includes('padaria') || textoBusca.includes('restaur');
    case 'Comércio':
      return textoBusca.includes('supermerc') || textoBusca.includes('posto') || textoBusca.includes('loja') || textoBusca.includes('revenda') || textoBusca.includes('comerc') || textoBusca.includes('coop') || textoBusca.includes('agro');
    case 'Automóveis':
      return textoBusca.includes('oficina') || textoBusca.includes('mecanic') || textoBusca.includes('automov') || textoBusca.includes('rota') || textoBusca.includes('veícul') || textoBusca.includes('carro');
    default:
      return true;
  }
};

// --- COMPONENTE PRINCIPAL ---
function Portfolio() {
  const { obterPortfolio } = usePortfolio();
  const [filtroAtual, setFiltroAtual] = useState('Todos');
  const [portfolioBanco, setPortfolioBanco] = useState([]);

  // Busca dados do banco ao montar o componente
  useEffect(() => {
    const buscarPortfolio = async () => {
      try {
        const dados = await obterPortfolio();
        setPortfolioBanco(dados || []);
      } catch (error) {
        console.error('Erro ao buscar portfólio do banco:', error);
      }
    };

    buscarPortfolio();
  }, [obterPortfolio]);

  // Filtra a lista estática baseada no estado do botão
  const projetosFiltrados = PROJETOS_ESTATICOS.filter((projeto) =>
    verificarCorrespondenciaFiltro(projeto, filtroAtual)
  );

  return (
    <main className="p-20 animacao-entrada">
      
      {/* Hero Section */}
      <section className="page-hero text-center">
        <div className="page-hero-container">
          <div className="page-hero-content">
            <h1 className="page-title">Portfólio</h1>
            <p className="page-subtitle">Projetos • Cases de Estudo • Empresas</p>
          </div>
          <div className="sobre-slogan-box">
            <span className="sobre-slogan fonte-titulo">
              Conheça alguns dos nossos trabalhos.
            </span>
          </div>
        </div>
      </section>

      {/* Barra de Filtros */}
      <div className="mb-20 text-center filter-bar">
        {FILTROS_DISPONIVEIS.map((filtro) => (
          <button
            key={filtro}
            className={`btn ${filtroAtual === filtro ? 'active' : 'btn-outline'}`}
            onClick={() => setFiltroAtual(filtro)}
            type="button"
          >
            {filtro}
          </button>
        ))}
      </div>

      {/* Grid de Projetos Estáticos */}
      <div className="grid-3x3 mb-20">
        {projetosFiltrados.map((proj) => (
          <Link to={`/portfolio/${proj.id}`} className="btn-card" key={proj.id}>
            <div className="card">
              <h3 className={`projeto-id-${proj.id}`}>{proj.nome}</h3>
              <p><small>{proj.categoria}</small></p>
              <p>{proj.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Seção Dinâmica do Banco de Dados */}
      <section className="mb-20">
        <h2 className="mb-10 sem-linha">Itens recentes do banco de dados</h2>
        <div className="grid-3x3 mb-10">
          {portfolioBanco.length > 0 ? (
            portfolioBanco.slice(0, 6).map((item) => (
              <div className="card" key={item.id}>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            ))
          ) : (
            <p>Carregando itens do banco...</p>
          )}
        </div>
        <button className="btn" type="button" onClick={() => {}}>
          Cadastrar Item
        </button>
      </section>

    </main>
  );
}

export default Portfolio;