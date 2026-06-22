import React from 'react';
import '../styles/sobre.css';

function Sobre() {
    return (
        <main className="sobre-container animacao-entrada">
            
            {/* 1. HERO / BANNER INTERNO */}
            <section className="sobre-hero">
                <div className="sobre-hero-content">
                    <h1 className="sobre-titulo">Sobre o Studio Âmbar</h1>
                    <p className="sobre-subtitulo">Design • Branding • Conteúdo Digital</p>
                    <div className="sobre-slogan-box">
                        <span className="sobre-slogan">"Sua marca, nossa essência"</span>
                    </div>
                </div>
            </section>

            {/* 2. HISTÓRIA DA EMPRESA */}
            <section className="sobre-secao sobre-historia">
                <div className="sobre-conteudo-flex">
                    <div className="sobre-texto-bloco">
                        <span className="sobre-tag">Quem Somos</span>
                        <h2>Histórico da Empresa</h2>
                        <p>
                            A Studio Âmbar é um estúdio criativo fictício, especializado em 
                            branding, design e conteúdo digital.
                        </p>
                        <p className="sobre-destaque-texto">
                            Combinamos estratégia, estética e propósito para criar marcas 
                            memoráveis e soluções digitais que conectam pessoas e impulsionam negócios.
                        </p>
                    </div>
                    <div className="sobre-imagem-bloco">
                        <div className="moldura-logo-elo">
                            <img 
                                src="/web3.png" 
                                alt="Arte conceitual Studio Âmbar" 
                                className="sobre-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MISSÃO, VISÃO E VALORES */}
            <section className="sobre-secao sobre-mvv-bg">
                <div className="sobre-alinhamento">
                    <h2 className="titulo-secao-central">Propósito</h2>
                    <div className="sobre-grid-tres">
                        <div className="sobre-card-mvv">
                            <h3>Missão</h3>
                            <p>Transformar ideias em marcas autênticas e estratégicas.</p>
                        </div>
                        <div className="sobre-card-mvv">
                            <h3>Visão</h3>
                            <p>Ser referência em branding para pequenos negócios no Brasil.</p>
                        </div>
                        <div className="sobre-card-mvv">
                            <h3>Valores</h3>
                            <p>Criatividade, Transparência, Compromisso e Inovação.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. EQUIPE */}
            <section className="sobre-secao">
                <div className="sobre-alinhamento">
                    <span className="sobre-tag centralizado">Mentes Criativas</span>
                    <h2 className="titulo-secao-central">Nossa Equipe</h2>
                    
                    <div className="sobre-grid-equipe">
                        <div className="card-equipe">
                            <div className="foto-wrapper">
                                <img src="https://via.placeholder.com/150" alt="Isaque Emanuel" />
                            </div>
                            <h3>Isaque Emanuel A. Bastos</h3>
                            <span className="cargo">Líder / Organizador</span>
                            <p>Organização do GitHub, cronograma, integração geral e suporte à equipe.</p>
                        </div>

                        <div className="card-equipe">
                            <div className="foto-wrapper">
                                <img src="https://via.placeholder.com/150" alt="Emanuel" />
                            </div>
                            <h3>Emanuel</h3>
                            <span className="cargo">Banco de Dados</span>
                            <p>Modelagem e implementação do MySQL e desenvolvimento de APIs.</p>
                        </div>

                        <div className="card-equipe">
                            <div className="foto-wrapper">
                                <img src="https://via.placeholder.com/150" alt="Cássio" />
                            </div>
                            <h3>Cássio</h3>
                            <span className="cargo">Desenvolvedor Front-end</span>
                            <p>Responsável pelo desenvolvimento e estruturação da página Sobre e Serviços.</p>
                        </div>

                        <div className="card-equipe">
                            <div className="foto-wrapper">
                                <img src="https://via.placeholder.com/150" alt="Leonardo" />
                            </div>
                            <h3>Leonardo</h3>
                            <span className="cargo">Front-end & Portfolio</span>
                            <p>Desenvolvimento das seções de Portfólio e detalhamento de Cases de sucesso.</p>
                        </div>

                        <div className="card-equipe">
                            <div className="foto-wrapper">
                                <img src="https://via.placeholder.com/150" alt="Guilherme" />
                            </div>
                            <h3>Guilherme</h3>
                            <span className="cargo">Dev Blog & Contato</span>
                            <p>Responsável pela área de publicações do Blog e formulários de atendimento.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DIFERENCIAIS */}
            <section className="sobre-secao sobre-diferenciais-bg">
                <div className="sobre-alinhamento">
                    <h2 className="titulo-secao-central">Por que nos escolher?</h2>
                    <div className="sobre-grid-tres">
                        <div className="card-diferencial">
                            <h3>Atendimento Próximo</h3>
                            <p>Comunicação clara, transparente e suporte humanizado durante todo o projeto.</p>
                        </div>
                        <div className="card-diferencial">
                            <h3>Projetos Sob Medida</h3>
                            <p>Soluções criadas exclusivamente para a realidade e necessidade de cada cliente.</p>
                        </div>
                        <div className="card-diferencial">
                            <h3>Resultados Reais</h3>
                            <p>Estratégias visuais e modernas planejadas para dar destaque real ao seu negócio.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Sobre;