import React, { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

function CadastrarPortfolio() {
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
        if (data.length > 0) {
          setIdProjeto(String(data[0].id));
        }
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      } finally {
        setCarregando(false);
      }
    };
    buscarProjetos();
  }, []);

  const cadastrarPortfolio = async () => {
    try {
      const response = await fetch(`${API_BASE}/portfolio`, {
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

      setIdProjeto("1");
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
              <label htmlFor="idProjeto">Projeto</label>
              {carregando ? (
                <p>Carregando projetos...</p>
              ) : projetos.length > 0 ? (
                <select
                  id="idProjeto"
                  value={idProjeto}
                  onChange={(e) => setIdProjeto(e.target.value)}
                  required
                >
                  <option value="">Selecione um projeto</option>
                  {projetos.map((proj) => (
                    <option key={proj.id} value={String(proj.id)}>
                      ID {proj.id} - Cliente ID {proj.id_cliente}
                    </option>
                  ))}
                </select>
              ) : (
                <p style={{ color: 'red' }}>Nenhum projeto disponível. Crie um projeto primeiro.</p>
              )}
            </div>

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