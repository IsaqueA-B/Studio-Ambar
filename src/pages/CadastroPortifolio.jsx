import React, { useState } from "react";

function CadastrarPortfolio() {
  const [idProjeto, setIdProjeto] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const cadastrarPortfolio = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_projeto: Number(idProjeto),
          titulo,
          descricao,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.erro);
        return;
      }

      alert("Projeto do portfólio cadastrado com sucesso!");

      setIdProjeto("");
      setTitulo("");
      setDescricao("");

    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <main className="p-20 animacao-entrada">
      <section className="text-center mb-20">
        <h1>Cadastrar Portfólio</h1>
        <p>Preencha os dados do projeto do portfólio.</p>
      </section>

      <section className="container">
        <div className="card formulario-servico">
          <h2 className="card-titulo-contato">Dados do Portfólio</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              cadastrarPortfolio();
            }}
          >
  

            <div className="form-group">
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                id="titulo"
                placeholder="Ex.: Website Studio Âmbar"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                rows="5"
                placeholder="Descreva o projeto..."
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              ></textarea>
            </div>

            <div className="text-right">
              <button className="btn" type="submit">
                Cadastrar Portfólio
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default CadastrarPortfolio;