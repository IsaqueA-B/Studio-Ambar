import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

function CadastroPortfolio() {
  const [projetos, setProjetos] = useState([]);
  const [idProjeto, setIdProjeto] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarProjetos = async () => {
      try {
        const response = await fetch(`${API_BASE}/projetos`);
        const data = await response.json();
        setProjetos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
      } finally {
        setCarregando(false);
      }
    };
    buscarProjetos();
  }, []);

  const validarFormulario = () => {
    if (!idProjeto) {
      alert("Selecione um projeto.");
      return false;
    }
    if (!titulo.trim()) {
      alert("Título é obrigatório.");
      return false;
    }
    if (!descricao.trim()) {
      alert("Descrição é obrigatória.");
      return false;
    }
    return true;
  };

  const cadastrarPortfolio = async () => {
    if (!validarFormulario()) return;

    try {
      const response = await fetch(`${API_BASE}/portfolio`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_projeto: Number(idProjeto),
          titulo: titulo.trim(),
          descricao: descricao.trim(),
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        alert(data.erro);
        return;
      }
      alert("Portfólio cadastrado com sucesso!");
      setIdProjeto(""); setTitulo(""); setDescricao("");
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <main className="p-20 animacao-entrada">
      <Link to="/admin" className="btn-voltar">← Voltar ao Administrativo </Link>

      <section className="text-center mb-20">
        <h1>Cadastrar Portfólio</h1>
        <p>Preencha todos os campos obrigatórios.</p>
      </section>
      <section className="container">
        <div className="card formulario-servico">
          <h2 className="card-titulo-contato sem-linha">Dados do Portfólio</h2>
          <form onSubmit={(e) => { e.preventDefault(); cadastrarPortfolio(); }}>
            <div className="form-group">
              <label>Projeto *</label>
              {carregando ? <p>Carregando...</p> : projetos.length > 0 ? (
                <select value={idProjeto} onChange={(e) => setIdProjeto(e.target.value)} required>
                  <option value="">Selecione</option>
                  {projetos.map(p => <option key={p.id} value={p.id}>ID {p.id} - Cliente {p.id_cliente}</option>)}
                </select>
              ) : <p style={{ color: 'red' }}>Nenhum projeto disponível.</p>}
            </div>
            <div className="form-group">
              <label>Título *</label>
              <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Descrição *</label>
              <textarea rows="5" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
            </div>
            <div className="text-right">
              <button className="btn" type="submit">Cadastrar Portfólio</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default CadastroPortfolio;