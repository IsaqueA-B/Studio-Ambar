import React, { useEffect, useState } from "react";
import { useServicos } from "../hooks/useServicos";
import { Link } from 'react-router-dom';
const categoriasServicos = [
  {
    categoria: "Branding e Identidade",
    servicos: [
      {
        nome: "Identidade Visual",
        desc: "Criação de logo, paleta de cores e tipografia.",
        valor: "R$ 800",
      },
      {
        nome: "Branding Completo",
        desc: "Pesquisa, estratégia, identidade visual e manual completo da marca.",
        valor: "R$ 2.500",
      },
      {
        nome: "Manual da Marca",
        desc: "Documento completo com regras de uso da identidade visual.",
        valor: "R$ 900",
      },
      {
        nome: "Consultoria de Branding",
        desc: "Estratégias para fortalecer posicionamento e presença da marca.",
        valor: "R$ 700",
      },
    ],
  },

  {
    categoria: "Redes Sociais e Marketing",
    servicos: [
      {
        nome: "Social Media",
        desc: "Posts, stories e identidade para redes sociais.",
        valor: "R$ 400/mês",
      },
      {
        nome: "Criação de Banners",
        desc: "Banners digitais para sites, campanhas e anúncios.",
        valor: "R$ 150",
      },
    ],
  },

  {
    categoria: "Web Design e Desenvolvimento",
    servicos: [
      {
        nome: "Criação de Sites",
        desc: "Sites institucionais, landing pages e páginas personalizadas.",
        valor: "R$ 1.500",
      },
      {
        nome: "Website Institucional",
        desc: "Design e desenvolvimento de sites profissionais para empresas e marcas.",
        valor: "R$ 1.500",
      },
      {
        nome: "Seção de Perguntas Frequentes",
        desc: "Acordeon ou lista com dúvidas comuns sobre serviços e contratação.",
        valor: "R$ 300",
      },
    ],
  },

  {
    categoria: "Materiais Corporativos",
    servicos: [
      {
        nome: "Papelaria Corporativa",
        desc: "Cartão de visita, papel timbrado, assinatura de e-mail.",
        valor: "R$ 350",
      },
      {
        nome: "Apresentações Profissionais",
        desc: "Slides comerciais, apresentações de projetos e pitch.",
        valor: "R$ 250",
      },
    ],
  },
];

const servicos = categoriasServicos.flatMap((categoria) =>
  categoria.servicos.map((servico) => ({
    ...servico,
    categoria: categoria.categoria,
  }))
);

function Servicos() {
  const { obterServicos } = useServicos();

  const [servicosBanco, setServicosBanco] = useState([]);
  const [filter, setFilter] = useState("Todos");

  const filters = [
    "Todos",
    ...new Set(servicos.map((s) => s.categoria)),
  ];

  useEffect(() => {
    const buscarServicos = async () => {
      try {
        const dados = await obterServicos();
        setServicosBanco(dados || []);
      } catch (error) {
        console.error(error);
      }
    };

    buscarServicos();
  }, []);

  const servicosFiltrados =
    filter === "Todos"
      ? servicos
      : servicos.filter((s) => s.categoria === filter);

  return (

    <main className="p-20 animacao-entrada">

      <section className="page-hero text-center">
        <div className="page-hero-container">
          <div className="page-hero-content">
            <h1 className="page-title">Nossos Serviços</h1>
            <p className="page-subtitle">Identidade Visual • Web Design • E MAIS</p>
          </div>
          <div className="slogan-box">
            <span className="slogan fonte-titulo">
              Soluções criativas para sua marca
            </span>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <div className="mb-20 text-center filter-bar">
        {filters.map((f) => (
          <button
            key={f}
            className={`btn ${filter === f ? "active" : "btn-outline"}`}
            onClick={() => setFilter(f)}
            type="button"
          >
            {f}
          </button>
        ))}
      </div>

      {/* Serviços */}
      <div className="grid-3x3 mb-20">
        {servicosFiltrados.map((servico, i) => (
          <div className="card" key={i}>
            <h3>{servico.nome}</h3>

            <p>
              <small>{servico.categoria}</small>
            </p>

            <p>{servico.desc}</p>

            <h3>
              <strong>A partir de {servico.valor}</strong>
            </h3>
          </div>
        ))}
      </div>

      <section className="page-hero text-center">
        <div className="page-hero-container">
          <div className="page-hero-content">
            <h2 className="page-title sem-linha">Serviços vindos do banco de dados</h2>
          </div>
        </div>
      </section>
      <div className="grid-3x3">
        {servicosBanco.length > 0 ? (
          servicosBanco.map((servico) => (
            <div className="card" key={servico.id}>
              <h3>{servico.tipo_servico}</h3>

              <p>{servico.descricao || "Descrição a definir"}</p>

              <h3>
                <strong>R$ {servico.valor}</strong>
              </h3>
            </div>
          ))
        ) : (
          <p>Carregando serviços do banco...</p>
        )}
      </div>
    </main>
  );
}
export default Servicos;