import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../hooks/usePortfolio';

function Blog() {
    const { obterPortfolio } = usePortfolio();
    const [portfolioBanco, setPortfolioBanco] = useState([]);

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

    return (
        <main className="blog-container animacao-entrada p-20">

            <section className="page-hero text-center">
                <div className="page-hero-container">
                    <div className="page-hero-content">
                        <h1 className="page-title">Blog</h1>
                        <p className="page-subtitle">Tendências • Noticias</p>
                    </div>
                    <div className="slogan-box">
                        <span className="slogan fonte-titulo">
                            Confira nossas novidades mais recentes!
                        </span>
                    </div>
                </div>
            </section>

            {/* Artigo em destaque (card horizontal com borda âmbar grossa) */}
            <section className="mb-20">
                <div className="card card-blog-destaque">
                    <span className="cargo">05/06/2026</span>
                    <h2 className="card-titulo blog-titulo-destaque">
                        Como um bom design pode aumentar suas vendas em até 200%
                    </h2>
                    <p>
                        A importância da criação de identidades visuais estratégicas. Entenda como marcas que investem em experiência visual e posicionamento estético convertem muito mais clientes e dominam o mercado digital.
                    </p>
                    <Link to="/blog/1" className="btn btn-outline mt-10">
                        Quero ler o artigo completo
                    </Link>
                </div>
            </section>

            <section className="mb-20">
                <div className="card">
                    <h2 className="card-titulo">Itens recentes do banco</h2>
                    {portfolioBanco.length > 0 ? (
                        portfolioBanco.slice(0, 3).map((item) => (
                            <div key={item.id} style={{ marginTop: '10px' }}>
                                <strong>{item.titulo}</strong>
                                <p>{item.descricao}</p>
                            </div>
                        ))
                    ) : (
                        <p>Carregando itens do banco...</p>
                    )}
                </div>
            </section>

            {/* Grid de artigos com 2 colunas (usando grid-auto) */}
            <section>
                <div className="grid-auto">
                    <div className="card card-blog">
                        <span className="cargo">10/06/2026</span>
                        <h3 className="card-titulo">5 tendências de branding para 2026</h3>
                        <p>
                            O minimalismo caloroso e o uso de IA nas marcas. Novidades estéticas que vão fazer muito sucesso no próximo ano.
                        </p>
                        <Link to="/blog/2" className="btn btn-outline mt-10">Ler artigo</Link>
                    </div>

                    <div className="card card-blog">
                        <span className="cargo">01/06/2026</span>
                        <h3 className="card-titulo">
                            Por que sua empresa precisa de um site profissional
                        </h3>
                        <p>
                            Entenda como o desenvolvimento web sob medida constrói autoridade e ajuda nos empreendimentos das empresas no Google.
                        </p>
                        <Link to="/blog/3" className="btn btn-outline mt-10">Ler artigo</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Blog;