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

function Home() {

    return (
        <div>
            <div style={{ marginTop: '80px' }}>
                <img src={WordMark} alt="WordMark" className="WordMark" />
            </div>

            <main className="p-20 animacao-entrada">

                {/* SEÇÃO 1: QUEM SOMOS + SERVIÇOS EM DESTAQUE (dividida por linha) */}
                <section className="home-secao1">
                    <div className="home-lado home-esquerda">
                        <span className="home-tag">Como agimos?</span>
                        <h2 className="home-titulo-esquerda">Usamos a Criatividade</h2>
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

                <section className="home-secao2">
                    <div className="sobre-alinhamento">
                        <span className="home-tag centralizado">Alguns serviços</span>
                        <h2 className="h2-central sem-linha">O que fazemos</h2>

                        <div className="grid-4x4">
                            <div className="card">
                                <div className="home-icon-card">
                                    <img src={iconVisual} alt="Ícone Missão" />
                                </div>
                                <h3 className="home-card-titulo">Identidade Visual</h3>
                                <p>
                                    Criamos logotipos, paletas de cores e tipografias que
                                    representam a essência da sua marca.
                                </p>
                            </div>
                            <div className="card">
                                <div className="home-icon-card">
                                    <img src={iconSocial} alt="Ícone Visão" />
                                </div>
                                <h3 className="home-card-titulo">Social Media</h3>
                                <p>
                                    Desenvolvemos conteúdo visual para posts, stories e banners
                                    que engajam seu público e fortalecem sua presença no digital.
                                </p>
                            </div>
                            <div className="card">
                                <div className="home-icon-card">
                                    <img src={iconPersonalizacao} alt="Ícone Visão" />
                                </div>
                                <h3 className="home-card-titulo">Personalização Visual</h3>
                                <p>
                                    Ajustes e adaptações de design para que cada detalhe reflita
                                    exatamente o estilo do seu negócio.
                                </p>
                            </div>
                            <div className="card">
                                <div className="home-icon-card">
                                    <img src={iconInstitucionais} alt="Ícone Visão" />
                                </div>
                                <h3 className="home-card-titulo">Sites Institucionais</h3>
                                <p>
                                    Sites modernos, responsivos e otimizados para apresentar sua
                                    empresa com credibilidade.
                                </p>
                            </div>
                        </div>
                        <Link to="/servicos" className="btn btn-outline btn-nav-servicos">Ver todos os serviços</Link>
                    </div>
                </section>


                <section className="home-secao3">
                    <div className="sobre-alinhamento">
                        <span className="home-tag centralizado">Em destaque</span>
                        <h2 className="h2-central sem-linha">Do Portfólio</h2>

                        <div className="grid-3x3">
                            <div className="card">
                                <div className="home-icon-empresa">
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
                                <div className="home-icon-empresa">
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
                                <div className="home-icon-empresa">
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
                        <Link to="/portfolio" className="btn btn-outline btn-nav-servicos">Ver todos os projetos</Link>
                    </div>
                </section>

            </main>
        </div>
    );
}
export default Home;