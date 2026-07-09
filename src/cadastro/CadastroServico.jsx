import React, { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

function CadastroServico() {
  const [tipo_servico, setTipoServico] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  const validarFormulario = () => {
    if (!tipo_servico.trim()) {
      alert("Tipo de serviço é obrigatório.");
      return false;
    }
    if (!valor || isNaN(Number(valor)) || Number(valor) <= 0) {
      alert("Valor deve ser um número positivo.");
      return false;
    }
    if (!descricao.trim()) {
      alert("Descrição é obrigatória.");
      return false;
    }
    return true;
  };

  const cadastrarServico = async () => {
    if (!validarFormulario()) return;

    try {
      const response = await fetch(`${API_BASE}/servicos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo_servico: tipo_servico.trim(),
          valor: Number(valor),
          descricao: descricao.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        alert(data.erro);
        return;
      }

      alert("Serviço cadastrado com sucesso!");
      setTipoServico(""); setValor(""); setDescricao("");
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <main className="p-20 animacao-entrada">
      <section className="text-center mb-20">
        <h1>Cadastrar Serviço</h1>
        <p>Preencha todos os campos obrigatórios.</p>
      </section>
      <section className="container">
        <div className="card formulario-servico">
          <h2 className="card-titulo-contato sem-linha">Dados do Serviço</h2>
          <form onSubmit={(e) => { e.preventDefault(); cadastrarServico(); }}>
            <div className="form-group">
              <label>Tipo de Serviço *</label>
              <input type="text" value={tipo_servico} onChange={(e) => setTipoServico(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Valor *</label>
              <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} min="0.01" step="0.01" required />
            </div>
            <div className="form-group">
              <label>Descrição *</label>
              <textarea rows="4" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
            </div>
            <div className="text-right">
              <button className="btn" type="submit">Cadastrar Serviço</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default CadastroServico;