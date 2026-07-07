import React from "react";

function CadastrarServico() {
  return (
    <main className="p-20 animacao-entrada">
      <section className="text-center mb-20">
        <h1>Cadastrar Serviço</h1>
        <p>Preencha os dados do novo serviço.</p>
      </section>

      <section className="container">
        <div className="card formulario-servico">
          <h2 className="card-titulo-contato">Dados do Serviço</h2>

          <form>
            <div className="campo-form">
              <label htmlFor="id">ID</label>
              <input
                type="number"
                id="id"
                name="id"
                placeholder="Digite o ID"
              />
            </div>

            <div className="campo-form">
              <label htmlFor="tipo_servico">Tipo de Serviço</label>
              <input
                type="text"
                id="tipo_servico"
                name="tipo_servico"
                placeholder="Digite o tipo de serviço"
              />
            </div>

            <div className="campo-form">
              <label htmlFor="valor">Valor</label>
              <input
                type="text"
                id="valor"
                name="valor"
                placeholder="Ex: R$ 1.500"
              />
            </div>

            <div className="campo-form">
              <label htmlFor="prazo">Prazo</label>
              <input
                type="text"
                id="prazo"
                name="prazo"
                placeholder="Ex: 15 dias"
              />
            </div>

            <div className="text-right">
              <button className="btn" type="button">
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
