import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className="p-20 animacao-entrada">
            <section className="text-center mb-20">
                <h1 className="WordMark">Studio Âmbar</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Transformamos ideias em marcas que conectam. Conheça nossos serviços e portfólio.
                </p>
            </section>

            {/* SEÇÃO 1: QUEM SOMOS + SERVIÇOS EM DESTAQUE (dividida por linha) */}
            <section className="home-secao1">
                <div className="home-lado home-esquerda">
                    <span className="sobre-tag">Quem Somos</span>
                    <h2 className="home-titulo-esquerda">Criatividade que conecta</h2>
                    <p>
                        Transformamos ideias em marcas autênticas. Combinamos estratégia,
                        estética e propósito para dar vida a negócios que se destacam no digital.
                        Tudo para ficar do jeito que você imaginou, com a nossa assinatura de qualidade.
                    </p>
                    <Link to="/sobre" className="btn btn-outline">Saiba mais</Link>
                </div>

                {/* Linha divisória vertical */}
                <div className="home-linha"></div>

                <div className="home-lado home-direita">
                    <span className="sobre-tag">Serviços em Destaque</span>
                    <h2 className="home-titulo-direita">O que fazemos de diferente</h2>
                        <p>
                            Identidade Visual <br></br>
                            Social Media <br></br>
                            Branding Completo <br></br>
                            Estilização personalizada
                        </p>
                    <Link to="/servicos" className="btn btn-outline">Ver todos os serviços</Link>
                </div>
            </section>


            <div className="grid-3x3 mb-20">
                <div className="card">
                    <h3>Hero Banner</h3>
                    <p>Imagem de fundo + título impactante + CTA "Ver portfólio" / "Solicitar orçamento".</p>
                </div>
                <div className="card">
                    <h3>Serviços em destaque</h3>
                    <p>3-4 cards (Identidade Visual, Social Media, etc.) com ícone, descrição e link /servicos.</p>
                </div>
                <div className="card">
                    <h3>Portfólio rápido</h3>
                    <p>Grid com 3 projetos (imagem, nome, categoria) + botão "Ver todos".</p>
                </div>
            </div>

            <div className="grid-3x3 mb-20">
                <div className="card">
                    <h3>Depoimentos</h3>
                    <p>2-3 depoimentos fictícios com foto, nome e texto.</p>
                </div>
                <div className="card">
                    <h3>CTA final</h3>
                    <p>Faixa colorida: "Vamos criar algo incrível?" + botão /contato.</p>
                </div>
            </div>
        </main>
    );
}

export default Home;