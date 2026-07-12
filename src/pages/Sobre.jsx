import React, { useEffect, useState } from "react";

/* icons */
import iconMissao from "../assets/images/Icons/Sobre/missões.png";
import iconValores from "../assets/images/Icons/Sobre/valores.png";
import iconVisão from "../assets/images/Icons/Sobre/visão.png";
import iconClientes from "../assets/images/Icons/Sobre/iconusuarioscadastrados.png";
import iconServicos from "../assets/images/Icons/Sobre/icon-servicos.png";
import iconPortfolio from "../assets/images/Icons/Sobre/iconitensnoportifolio.png";
import iconMensagens from "../assets/images/Icons/Sobre/iconmensagemnsrecebidas.png";

/* pessoas */
import daniel from "../assets/images/pessoas/Daniel.jpeg";
import isaque from "../assets/images/pessoas/Isaque.jpeg";
import cassio from "../assets/images/pessoas/Cássio.jpeg";
import guilherme from "../assets/images/pessoas/Guilherme.png";

import { useClientes } from "../admin/hooks/useClientes";
import { useContatos } from "../admin/hooks/useContatos";
import { usePortfolio } from "../admin/hooks/usePortfolio";
import { useServicos } from "../admin/hooks/useServicos";

import '../styles/Pages/sobreR.css';

function Sobre() {
  const { obterClientes } = useClientes();
  const { obterServicos } = useServicos();
  const { obterPortfolio } = usePortfolio();
  const { obterContatos } = useContatos();
  const [estatisticas, setEstatisticas] = useState({
    clientes: 0,
    servicos: 0,
    portfolio: 0,
    contatos: 0,
  });

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const [clientesData, servicosData, portfolioData, contatosData] = await Promise.all([
          obterClientes(),
          obterServicos(),
          obterPortfolio(),
          obterContatos(),
        ]);

        setEstatisticas({
          clientes: Array.isArray(clientesData) ? clientesData.length : 0,
          servicos: Array.isArray(servicosData) ? servicosData.length : 0,
          portfolio: Array.isArray(portfolioData) ? portfolioData.length : 0,
          contatos: Array.isArray(contatosData) ? contatosData.length : 0,
        });
      } catch (error) {
        console.error(error);
      }
    };

    buscarDados();
  }, []);

  return (
    <main className="sobre-page p-20 animacao-entrada">

      <section className="page-hero text-center">
        <div className="page-hero-container">
          <div className="page-hero-content">
            <h1 className="page-title title-desktop">Sobre o Studio Âmbar</h1>
            <h1 className="page-title title-mobile">Sobre Nós</h1>
            <p className="page-subtitle subtitle-desktop">Identidade Visual • Criação de marcas • Redes Sociais</p>
            <p className="page-subtitle subtitle-mobile">Identidade Visual • Criação de marcas </p>
          </div>
          <div className="slogan-box">
            <span className="slogan fonte-titulo">
              "Sua marca, nossa essência"
            </span>
          </div>
        </div>
      </section>

      <section className="sobre-secao">
        <div className="sobre-conteudo-flex">
          <div className="sobre-texto-bloco">
            <h2>Histórico da Empresa</h2>

            <p> A Studio Âmbar é um estúdio criativo especializado no desenvolvimento de identidade de marca, design gráfico e soluções digitais. Desde sua fundação, atua com o propósito de transformar ideias em projetos estratégicos que fortalecem a presença e a comunicação de empresas no mercado. </p>

            <p className="sobre-destaque-texto"> Ao longo de sua trajetória, a Studio Âmbar consolidou uma abordagem que integra criatividade, planejamento e inovação, desenvolvendo identidades visuais, materiais gráficos e conteúdos digitais que geram valor, fortalecem marcas e proporcionam experiências relevantes para seus clientes. </p>
          </div>
          <div className="sobre-imagem-bloco">
            <div className="moldura-logo-elo">
              <img
                src="web3.png"
                alt="Arte conceitual Studio Âmbar"
                className="sobre-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-secao">
        <div className="sobre-alinhamento">

          <h2 className="h2-central titulo-secao-central sem-linha">
            Dados do Studio
          </h2>

          <div className="grid-2x2">

            <div className="card card-dashboard">
              <div className="dashboard-top">
                <div className="dashboard-info">
                  <div className="dashboard-icon">
                    <img src={iconClientes} alt="Clientes" />
                  </div>

                  <h3>Clientes cadastrados</h3>
                </div>

                <span>{estatisticas.clientes}</span>
              </div>
            </div>

            <div className="card card-dashboard">
              <div className="dashboard-top">
                <div className="dashboard-info">
                  <div className="dashboard-icon">
                    <img src={iconServicos} alt="Serviços" />
                  </div>

                  <h3>Serviços disponíveis</h3>
                </div>

                <span>{estatisticas.servicos}</span>
              </div>
            </div>

            <div className="card card-dashboard">
              <div className="dashboard-top">
                <div className="dashboard-info">
                  <div className="dashboard-icon">
                    <img src={iconPortfolio} alt="Portfólio" />
                  </div>

                  <h3>Itens no portfólio</h3>
                </div>

                <span>{estatisticas.portfolio}</span>
              </div>
            </div>

            <div className="card card-dashboard">
              <div className="dashboard-top">
                <div className="dashboard-info">
                  <div className="dashboard-icon">
                    <img src={iconMensagens} alt="Mensagens" />
                  </div>

                  <h3>Mensagens recebidas</h3>
                </div>

                <span>{estatisticas.contatos}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="sobre-secao">
        <div className="sobre-alinhamento">
          <h2 className="h2-central titulo-secao-central sem-linha">Propósito</h2>

          <div className="grid-3x3">
            <div className="card card-lg text-center">
              <div className="icon-card">
                <img src={iconMissao} alt="Ícone Missão" />
              </div>
              <h3 className="card-titulo">Nossa Missão</h3>
              <p>
                Transformar ideias em marcas autênticas e estratégicas,
                desenvolvendo identidades visuais modernas, criativas e
                profissionais para pequenos negócios, fortalecendo a presença
                digital e a comunicação visual de cada cliente.
              </p>
            </div>
            <div className="card card-lg text-center">
              <div className="icon-card">
                <img src={iconVisão} alt="Ícone Visão" />
              </div>
              <h3 className="card-titulo">Nossa Visão</h3>
              <p>
                Ser referência em branding, design e conteúdo digital para
                pequenos negócios no Brasil, criando experiências visuais
                inovadoras e ajudando marcas a conquistarem mais reconhecimento,
                credibilidade e destaque no mercado.
              </p>
            </div>
            <div className="card card-lg card-valores">
              <div className="icon-card">
                <img src={iconValores} alt="Ícone Valores" />
              </div>

              <h3 className="card-titulo">Nossos Valores</h3>

              <div className="lista-valores">
                <p>
                  <strong>Criatividade - </strong>
                  Desenvolvemos soluções únicas e modernas.

                </p>
                <p>
                  <strong>Compromisso - </strong>
                  Priorizamos qualidade, organização e responsabilidade.
                </p>
                <p>
                  <strong>Inovação - </strong>
                  Buscamos novas ideias, tendências e soluções visuais criativas.
                </p>
                <p>
                  <strong>Profissionalismo - </strong>
                  Trabalhamos com estratégia, dedicação e atenção aos detalhes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="sobre-secao">
        <div className="sobre-alinhamento">
          <h2 className="h2-central titulo-secao-central sem-linha">
            Por que nos escolher?
          </h2>
          <div className="grid-3x3">
            <div className="card SF grid-border-right">
              <h3 className="card-titulo">Atendimento Próximo</h3>
              <p> Comunicação clara, transparente e suporte humanizado durante todo o projeto.</p>
            </div>
            <div className="card SF grid-border-right">
              <h3 className="card-titulo">Projetos Sob Medida</h3>
              <p> Soluções criadas exclusivamente e pensando na necessidade de cada cliente.</p>
            </div>
            <div className="card SF">
              <h3 className="card-titulo">Resultados Reais</h3>
              <p>Estratégias visuais e modernas planejadas para dar destaque real ao seu negócio.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-secao">
        <div className="sobre-alinhamento">
          <h2 className="h2-central titulo-secao-central sem-linha">Nossa Equipe</h2>

          <div className="grid-auto">
            {" "}
            <div className="card card-equipe text-center">
              <div className="foto-wrapper">
                <img
                  src={isaque}
                  alt="Isaque Emanuel"
                />
              </div>
              <h3 className="card-titulo">Isaque Bastos</h3>
              <span className="cargo">Líder / Organizador</span>
              <p>
                Organização do GitHub, cronograma, integração geral e suporte à
                equipe.
              </p>
            </div>
            <div className="card card-equipe text-center">
              <div className="foto-wrapper">
                <img src="https://via.placeholder.com/150" alt="Emanuel" />
              </div>
              <h3 className="card-titulo">Emanuel Hubner</h3>
              <span className="cargo">Banco de Dados</span>
              <p>
                Modelagem e implementação do MySQL e desenvolvimento de APIs.
              </p>
            </div>
            <div className="card card-equipe text-center">
              <div className="foto-wrapper">
                <img src={cassio} alt="Cássio" />
              </div>
              <h3 className="card-titulo">Cássio Schultz</h3>
              <span className="cargo">Desenvolvedor Front-end</span>
              <p>
                Responsável pelo desenvolvimento e estruturação da página Sobre
                e Serviços.
              </p>
            </div>
            <div className="card card-equipe text-center">
              <div className="foto-wrapper">
                <img src="https://via.placeholder.com/150" alt="Leonardo" />
              </div>
              <h3 className="card-titulo">Leonardo Hemmilla</h3>
              <span className="cargo">Desenvolvedor Front-end</span>
              <p>
                Desenvolvimento das seções de Portfólio e detalhamento de Cases
                de sucesso.
              </p>
            </div>
            <div className="card card-equipe text-center">
              <div className="foto-wrapper">
                <img src={guilherme} alt="Guilherme" />
              </div>
              <h3 className="card-titulo">Guilherme Thomas</h3>
              <span className="cargo">Desenvolvedor Front-end</span>
              <p>
                Responsável pela área de publicações do Blog e formulários de
                atendimento.
              </p>
            </div>
            <div className="card card-equipe text-center">
              <div className="foto-wrapper">
                <img src={daniel} alt="Daniel" />
              </div>
              <h3 className="card-titulo">Daniel Buchholz</h3>
              <span className="cargo">Chefe</span>
              <p>Coordenador do projeto e orientador estratégico</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Sobre;
