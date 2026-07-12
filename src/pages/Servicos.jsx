import React, { useEffect, useState } from "react";
import { useServicos } from "../admin/hooks/useServicos";

/* Ícones */
import brandingIcon from "../assets/images/Icons/serviços/Branding e Identidade.png";
import materiaisIcon from "../assets/images/Icons/serviços/Materiais Corporativos.png";
import redesIcon from "../assets/images/Icons/serviços/Redes Sociais e Marketing.png";
import webIcon from "../assets/images/Icons/serviços/Web Design e Desenvolvimento.png";

import "../styles/Pages/servicosR.css";

const iconesCategorias = {
  "Branding e Identidade": brandingIcon,
  "Redes Sociais e Marketing": redesIcon,
  "Web Design e Desenvolvimento": webIcon,
  "Materiais Corporativos": materiaisIcon,
};

// Categorias disponíveis para o filtro
const CATEGORIAS = [
  "Branding e Identidade",
  "Redes Sociais e Marketing",
  "Web Design e Desenvolvimento",
  "Materiais Corporativos",
];

function Servicos() {
  const { obterServicos } = useServicos();

  const [servicos, setServicos] = useState([]);
  const [filter, setFilter] = useState("Todos");

  const filters = ["Todos", ...CATEGORIAS];

  useEffect(() => {
    const buscarServicos = async () => {
      try {
        const dados = await obterServicos();
        setServicos(dados || []);
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
    <main className="servicos-page p-20 animacao-entrada">
      <section className="page-hero text-center">
        <div className="page-hero-container">
          <div className="page-hero-content">
            <h1 className="page-title title-desktop">Nossos Serviços</h1>
            <h1 className="page-title title-mobile">Serviços</h1>
            <p className="page-subtitle">
              Identidade Visual • Web • Branding
            </p>
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

      {/* Cards (apenas do banco) */}
      <div className="grid-3x3 mb-20">
        {servicos.length === 0 ? (
          <p>Carregando serviços...</p>
        ) : servicosFiltrados.length > 0 ? (
          servicosFiltrados.map((servico) => (
            <div className="card servico-card" key={servico.id}>
              <div className="servico-header">
                <img
                  src={iconesCategorias[servico.categoria]}
                  alt={servico.categoria}
                  className="servico-icon"
                />
                <div className="servico-header-info">
                  <h4>{servico.tipo_servico}</h4>
                  {servico.categoria && <small>{servico.categoria}</small>}
                </div>
              </div>
              <p>{servico.descricao || "Descrição a definir"}</p>
              <h3 className="servico-preco">
                <strong>A partir de R$ {servico.valor}</strong>
              </h3>
            </div>
          ))
        ) : (
          <p>Nenhum serviço encontrado para esta categoria.</p>
        )}
      </div>
    </main>
  );
}

export default Servicos;