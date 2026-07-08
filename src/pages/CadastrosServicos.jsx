import React, { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

function CadastrarServico() {
  const [tipo_servico, setTipoServico] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  const cadastrarServico = async () => {
    try {
      const response = await fetch(`${API_BASE}/servicos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo_servico,
          valor: Number(valor),
          descricao: descricao || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.erro);
        return;
      }

      alert("Serviço cadastrado com sucesso!");

      setTipoServico("");
      setValor("");
      setDescricao("");
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <main className="p-20 animacao-entrada">
      <section className="text-center mb-20">
        <h1>Cadastrar Serviço</h1>
        <p>Preencha os dados do novo serviço.</p>
      </section>

      <section className="container">
        <div className="card formulario-servico">
          <h2 className="card-titulo-contato">Dados do Serviço</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              cadastrarServico();
            }}
          >
            <div className="form-group">
              <label htmlFor="tipo_servico">Tipo de Serviço</label>
              <input
                type="text"
                id="tipo_servico"
                name="tipo_servico"
                placeholder="Ex.: Identidade Visual"
                value={tipo_servico}
                onChange={(e) => setTipoServico(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="valor">Valor</label>
              <input
                type="number"
                id="valor"
                name="valor"
                placeholder="Ex.: 800.00"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                min="0"
                step="0.01"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                name="descricao"
                placeholder="Ex.: Posts, stories, design, roteiros"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                rows="4"
              />
            </div>

            <div className="text-right">
              <button className="btn" type="submit">
                Cadastrar Serviço
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default CadastrarServico;