import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
    return (
        <main className="blog-container animacao-entrada">
            {/* Cabeçalho do Blog (usa h1 e subtítulo globais) */}
            <section className="text-center mb-20">
                <h1>Blog</h1>
                <p className="subtitulo-pagina">
                    Dicas, tendências e novidades do mundo do design.
                </p>
                <p className="text-brand-ambar">
                    Confira nossas novidades mais recentes relacionadas a tecnologia e criação de sites!
                </p>
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