import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../admin/hooks/usePortfolio';
import { projetos } from '../componentes/data/portfolioData'
import '../styles/Pages/portfolioR.css';


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
    }, [filter, obterPortfolio]);

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

    const projetosFiltrados = projetos.filter(matchesFilter);

    return (
        <main className="portfolio-page p-20 animacao-entrada">

            <section className="page-hero text-center">
                <div className="page-hero-container">
                    <div className="page-hero-content">
                        <h1 className="page-title">Portfólio</h1>
                        <p className="page-subtitle">Projetos • Cases de Estudo • Empresas</p>
                    </div>
                    <div className="slogan-box">
                        <span className="slogan fonte-titulo">
                            Conheça alguns dos nossos trabalhos.
                        </span>
                    </div>
                </div>
            </section>

            {/* Filtros */}
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
                        <div className="card portfolio-card">
                            <div className="card-top">
                                {proj.imagens && proj.imagens.length > 0 && (
                                    <img
                                        src={proj.imagens[0].src}
                                        alt={proj.imagens[0].alt}
                                        className="card-logo"
                                    />
                                )}
                                <div className="card-title-group">
                                    <h3 className={`projeto-text projeto-id-${proj.id}`}
                                        style={{ fontFamily: proj.fonte }}>
                                        {proj.nome}
                                    </h3>
                                    <p className="card-categoria"><small>{proj.categoria}</small></p>
                                </div>
                            </div>
                            <p className="card-desc">{proj.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <section className="page-hero text-center">
                <div className="page-hero-container">
                    <div className="page-hero-content">
                        <h2 className="page-title sem-linha">Itens recentes</h2>
                    </div>
                </div>
            </section>
            <div className="grid-3x3">
                {portfolioBanco.length > 0 ? (
                    portfolioBanco.slice(0, 6).map((item) => (
                        <div className="card portfolio-card" key={item.id}>
                            <div className="card-top">
                                <div className="card-title-group">
                                    <h3>{item.titulo}</h3>
                                </div>
                            </div>
                            <p className="card-desc">{item.descricao}</p>
                        </div>
                    ))
                ) : (
                    <p>Carregando itens do banco...</p>
                )}
            </div>
        </main>
    );
}

export default Portfolio;