import React, { useState } from "react";

function CadastrarProjeto() {
  const [idCliente, setIdCliente] = useState("");
  const [idServico, setIdServico] = useState("");
  const [dataInicioProjeto, setDataInicioProjeto] = useState("");
  const [dataFinalProjeto, setDataFinalProjeto] = useState("");

  const cadastrarProjeto = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/projetos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_cliente: Number(idCliente),
          id_servico: Number(idServico),
          data_inicioProjeto: dataInicioProjeto,
          data_finalProjeto: dataFinalProjeto || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.erro);
        return;
      }

      alert("Projeto cadastrado com sucesso!");

      setIdCliente("");
      setIdServico("");
      setDataInicioProjeto("");
      setDataFinalProjeto("");

    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <main className="p-20 animacao-entrada">
      <section className="text-center mb-20">
        <h1>Cadastrar Projeto</h1>
        <p>Preencha os dados do projeto.</p>
      </section>

      <section className="container">
        <div className="card formulario-servico">
          <h2 className="card-titulo-contato">Dados do Projeto</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              cadastrarProjeto();
            }}
          >
            <div className="form-group">
              <label htmlFor="dataInicioProjeto">Data de Início</label>
              <input type="date" id="dataInicioProjeto" value={dataInicioProjeto} onChange={(e) => setDataInicioProjeto(e.target.value)}  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dataFinalProjeto">Data de Término</label>
              <input
                type="date"
                id="dataFinalProjeto"
                value={dataFinalProjeto}
                onChange={(e) => setDataFinalProjeto(e.target.value)}
              />
            </div>

            <div className="text-right">
              <button className="btn" type="submit">
                Cadastrar Projeto
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default CadastrarProjeto;