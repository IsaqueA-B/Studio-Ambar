import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../hooks/usePortfolio';

const projetosEstaticos = [
    { id: 1, nome: 'Doce Sabor Confeitaria', categoria: 'Identidade Visual', desc: 'Nova identidade e embalagens.' },
    { id: 2, nome: 'TechStart', categoria: 'Branding & Web', desc: 'Marca e site institucional.' },
    { id: 3, nome: 'Café do Zé', categoria: 'Logo & Social', desc: 'Logo e templates para redes sociais.' },
    { id: 4, nome: 'Oficina Rota Certa', categoria: 'Identidade Visual', desc: 'Marca para oficina mecânica com foco em confiança e movimentação.' },
    { id: 5, nome: 'Sabor Raiz', categoria: 'Branding & Embalagem', desc: 'Projeto para linha de alimentos artesanais com sabor caseiro.' },
    { id: 6, nome: 'Casa em Dia', categoria: 'Interior & Social', desc: 'Identidade visual para serviços de organização e decoração residencial.' },
    { id: 7, nome: 'Ilumina Decora', categoria: 'Design de Marca', desc: 'Branding para escritório de decoração com estilo elegante e contemporâneo.' },
    { id: 8, nome: 'BioTECNO', categoria: 'Refrigeração Médica', desc: 'Soluções de refrigeração para equipamentos médicos e armazenamento sensível.' },
    { id: 9, nome: 'Coopermil', categoria: 'Cooperativa Agropecuária', desc: 'Atuação em supermercados, postos e lojas agropecuárias.' },
    // Adicionar mais
];

function Portfolio() {
    const { obterPortfolio } = usePortfolio();
    const [filter, setFilter] = useState('Todos');
    const [portfolioBanco, setPortfolioBanco] = useState([]);

    const filters = ['Todos', 'Identidade Visual', 'Social Media', 'Web', 'Saúde', 'Alimentação', 'Comércio', 'Automóveis'];

    useEffect(() => {
        const buscarPortfolio = async () => {
            try {
                const dados = await obterPortfolio();
                setPortfolioBanco(dados || []);
            } catch (error) {
                console.error(error);
            }
        };

        buscarPortfolio();
    }, []);

    const matchesFilter = (proj) => {
        if (filter === 'Todos') return true;
        const text = `${proj.categoria || ''} ${proj.nome || ''} ${proj.desc || ''}`.toLowerCase();
        if (filter === 'Identidade Visual') return text.includes('identidade') || text.includes('identit');
        if (filter === 'Social Media') return text.includes('social') || text.includes('mídia') || text.includes('media');
        if (filter === 'Web') return text.includes('web') || text.includes('site');
        if (filter === 'Saúde') return text.includes('refrigera') || text.includes('médica') || text.includes('saúde') || text.includes('medical');
        if (filter === 'Alimentação') return text.includes('sabor') || text.includes('aliment') || text.includes('food') || text.includes('comida') || text.includes('padaria') || text.includes('restaur');
        if (filter === 'Comércio') return text.includes('supermerc') || text.includes('posto') || text.includes('loja') || text.includes('revenda') || text.includes('comerc') || text.includes('coop') || text.includes('agro');
        if (filter === 'Automóveis') return text.includes('oficina') || text.includes('mecanic') || text.includes('automov') || text.includes('rota') || text.includes('veícul') || text.includes('carro');
        return true;
    };

    const projetosFiltrados = projetosEstaticos.filter(matchesFilter);

    return (
        <main className="p-20 animacao-entrada">

            <section className="page-hero text-center">
                <div className="page-hero-container">
                    <div className="page-hero-content">
                        <h1 className="page-title">Portfolio</h1>
                        <p className="page-subtitle">Projetos • Cases de Estudo • Empresas</p>
                    </div>
                    <div className="sobre-slogan-box">
                        <span className="sobre-slogan fonte-titulo">
                            Conheça alguns dos nossos trabalhos.
                        </span>
                    </div>
                </div>
            </section>

            {/* Filtros futuros (opcional) */}
            <div className="mb-20 text-center filter-bar">
                {filters.map((f) => (
                    <button
                        key={f}
                        className={`btn ${filter === f ? 'active' : 'btn-outline'}`}
                        onClick={() => setFilter(f)}
                        type="button"
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="grid-3x3 mb-20">
                {projetosFiltrados.map((proj) => (
                    <Link to={`/portfolio/${proj.id}`} className="btn-card" key={proj.id}>
                        <div className="card">
                            <h3>{proj.nome}</h3>
                            <p><small>{proj.categoria}</small></p>
                            <p>{proj.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <section className="mb-20">
                <h2 className="mb-10 sem-linha">Itens recentes do banco de dados</h2>
                <div className="grid-3x3">
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
            </section>
        </main>
    );
}

export default Portfolio;