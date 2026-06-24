import React from 'react';

export default function Blog() {
    return (
        <div className="blog-container">
            {/* Cabeçalho do Blog */}
            <header className="blog-header">
                <h1 className="blog-title">BLOG</h1>
                <p className="blog-subtitle">Dicas, trends e novidades do mundo do design.</p>
                <p className="blog-highlight">
                    Confira nossas novidades mais recentes relacionadas a tecnologia e criação de um site!!!
                </p>
            </header>

            {/* SEÇÃO 1: Manchete Principal (Horizontal Larga) */}
            <section className="blog-section-row">
                <div className="blog-card">
                    <div className="blog-card-content">
                        <span className="blog-date">05/06/2026</span>
                        <h2 className="blog-main-title">
                            Como um bom design pode aumentar suas vendas em até 200%
                        </h2>
                        <p className="blog-description">
                            A importância da criação de identidades visuais estratégicas. Entenda como marcas que investem em experiência visual e posicionamento estético convertem muito mais clientes e dominam o mercado digital.
                        </p>
                        <span className="blog-read-more">Quero ler o artigo completo →</span>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 2: Duas Colunas (Tendências e Mercado) */}
            <section className="blog-section-grid">
                <div className="blog-card">
                    <div className="blog-card-content">
                        <span className="blog-date">10/06/2026</span>
                        <h3 className="blog-card-title">5 tendências de branding para 2026</h3>
                        <p className="blog-description">
                            O minimalismo caloroso e o uso de IA nas marcas. Novidades estéticas que vão fazer muito sucesso no próximo ano.
                        </p>
                        <span className="blog-read-more">Ler artigo →</span>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="blog-card-content">
                        <span className="blog-date">01/06/2026</span> {/* Data corrigida */}
                        <h3 className="blog-card-title">
                            Por que sua empresa precisa de um site profissional
                        </h3>
                        <p className="blog-description">
                            Entenda como o desenvolvimento web sob medida constrói autoridade e ajuda nos empreendimentos das empresas no Google.
                        </p>
                        <span className="blog-read-more">Ler artigo →</span>
                    </div>
                </div>
            </section>
        </div>
    );
}