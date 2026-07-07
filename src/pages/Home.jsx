import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WordMark from '../assets/images/Especificos/WordMark.png';
import { useServicos } from '../hooks/useServicos';

import iconSlogan from "../assets/images/Especificos/Icon_Slogan.png";

import iconInstitucionais from "../assets/images/Icons/Home/Institucionais.png";
import iconPersonalizacao from "../assets/images/Icons/Home/Personalizacao.png";
import iconSocial from "../assets/images/Icons/Home/Social.png";
import iconVisual from "../assets/images/Icons/Home/Visual.png";

import iconBioTecno from "../assets/images/Icons/Home/Biotecno.png";
import iconCoopermil from "../assets/images/Icons/Home/Coopermil.png";
import iconTechStart from "../assets/images/Icons/Home/TechStart.png";

import iconContato from "../assets/images/Icons/Home/icon-contato2.png";

function Home() {

    return (
        <div>
            <div style={{ marginTop: '80px' }}>
                <img src={WordMark} alt="WordMark" className="home-wordmark" />
            </div>

            <main className="p-20 animacao-entrada">

                {/* SEÇÃO 1: QUEM SOMOS + SERVIÇOS EM DESTAQUE (dividida por linha) */}
                <section className="home-section home-secao1">
                    <div className="home-lado home-esquerda">
                        <span className="home-tag">Como agimos?</span>
                        <h2 className="home-title">Usamos a Criatividade</h2>
                        <p>
                            No Studio Âmbar, acreditamos que a criatividade é o ponto de partida
                            para construir marcas que realmente conectam. Transformamos ideias em
                            identidades autênticas, combinando estratégia, estética e propósito em
                            cada etapa do processo. Nosso olhar vai além do design: mergulhamos na
                            essência de cada negócio para traduzir sua personalidade em comunicação
                            visual que gera reconhecimento e valor.
                            <br></br>                            <br></br>
                            Unimos pesquisa, conceito e execução para dar vida a marcas que se
                            destacam no digital — seja por meio de uma identidade visual marcante,
                            conteúdo relevante para redes sociais ou presença online consistente.
                            Cada detalhe é pensado para refletir quem você é, com originalidade e
                            coerência. Tudo para ficar exatamente do jeito que você imaginou, com a
                            nossa assinatura de qualidade.
                        </p>
                        <Link to="/sobre" className="btn btn-outline">Saiba mais</Link>
                    </div>

                    <div className="home-lado home-direita">
                        <img src={iconSlogan} alt="Ícone Slogan" className="home-icone-slogan" />
                    </div>
                </section>

                <section className="home-section home-secao2">
                    <div className="home-align-center">
                        <span className="home-tag">Alguns serviços</span>
                        <h2 className="h2-central sem-linha">O que fazemos</h2>

                        <div className="grid-4x4">
                            <div className="card">
                                <div className="icon-box icon-box--service">
                                    <img src={iconVisual} alt="Ícone Missão" />
                                </div>
                                <h3 className="home-card-titulo">Identidade Visual</h3>
                                <p>
                                    Criamos logotipos, paletas de cores e tipografias que
                                    representam a essência da sua marca.
                                </p>
                            </div>
                            <div className="card">
                                <div className="icon-box icon-box--service">
                                    <img src={iconSocial} alt="Ícone Visão" />
                                </div>
                                <h3 className="home-card-titulo">Social Media</h3>
                                <p>
                                    Desenvolvemos conteúdo visual para posts, stories e banners
                                    que engajam seu público e fortalecem sua presença no digital.
                                </p>
                            </div>
                            <div className="card">
                                <div className="icon-box icon-box--service">
                                    <img src={iconPersonalizacao} alt="Ícone Visão" />
                                </div>
                                <h3 className="home-card-titulo">Personalização Visual</h3>
                                <p>
                                    Ajustes e adaptações de design para que cada detalhe reflita
                                    exatamente o estilo do seu negócio.
                                </p>
                            </div>
                            <div className="card">
                                <div className="icon-box icon-box--service">
                                    <img src={iconInstitucionais} alt="Ícone Visão" />
                                </div>
                                <h3 className="home-card-titulo">Sites Institucionais</h3>
                                <p>
                                    Sites modernos, responsivos e otimizados para apresentar sua
                                    empresa com credibilidade.
                                </p>
                            </div>
                        </div>
                        <Link to="/servicos" className="btn btn-outline">Ver todos os serviços</Link>
                    </div>
                </section>


                <section className="home-section home-secao3">
                    <div className="home-align-center">
                        <span className="home-tag">Em destaque</span>
                        <h2 className="h2-central sem-linha">Do Portfólio</h2>

                        <div className="grid-3x3">
                            <div className="card">
                                <div className="icon-box icon-box--company">
                                    <img src={iconBioTecno} alt="Ícone Missão" />
                                </div>
                                <h3 className="home-card-titulo">BioTecno</h3>
                                <p>
                                    A BioTecno atua com biotecnologia sustentável e precisava de
                                    uma comunicação visual à altura de sua inovação científica.
                                    Desenvolvemos materiais corporativos, apresentações
                                    profissionais e posts para redes sociais.
                                </p>
                                <Link to="/portfolio/8" className="btn btn-outline btn-sm">
                                    Conhecer BioTecno →
                                </Link>
                            </div>
                            <div className="card">
                                <div className="icon-box icon-box--company">
                                    <img src={iconCoopermil} alt="Ícone Visão" />
                                </div>
                                <h3 className="home-card-titulo">Coopermil</h3>
                                <p>
                                    Com décadas de tradição no agronegócio, a Coopermil precisava
                                    modernizar sua imagem sem perder a essência cooperativista. O
                                    Studio Âmbar criou um rebranding completo: novo logotipo,
                                    embalagens padronizadas e presença digital estratégica.
                                </p>
                                <Link to="/portfolio/9" className="btn btn-outline btn-sm">
                                    Conhecer Coopermil →
                                </Link>
                            </div>
                            <div className="card">
                                <div className="icon-box icon-box--company">
                                    <img src={iconTechStart} alt="Ícone Visão" />
                                </div>
                                <h3 className="home-card-titulo">TechStart</h3>
                                <p>
                                    A TechStart é uma startup de soluções em nuvem que buscava se
                                    posicionar como referência em inovação. Desenvolvemos uma
                                    identidade visual moderna, com logotipo, paleta de cores
                                    vibrantes e um site institucional responsivo.
                                </p>
                                <Link to="/portfolio/2" className="btn btn-outline btn-sm">
                                    Conhecer TechStart →
                                </Link>
                            </div>
                        </div>
                        <Link to="/portfolio" className="btn btn-outline">Ver todos os projetos</Link>
                    </div>
                </section>

                <section className="home-cta">
                    <div className="card card-lg card-cta">

                        <div className="home-cta-icon">
                            <img src={iconContato} alt="Ícone Contato" />
                        </div>

                        <h2 className="home-cta-titulo sem-linha">
                            Quer saber mais ou agendar um projeto?
                        </h2>

                        <p className="home-cta-texto">
                            Entre em contato conosco para começar a planejar um novo projeto
                            conosco!
                        </p>

                        <Link to="/contato" className="btn btn-outline">
                            Entre em Contato
                        </Link>
                    </div>
                </section>

            </main>
        </div>
    );
}
export default Home;