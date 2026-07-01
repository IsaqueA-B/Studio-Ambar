import React from 'react';

function Contato() {
    return (
        <main className="contato-container animacao-entrada">
            {/* Cabeçalho da página (usa h1 e subtitulo-pagina globais) */}
            <section className="text-center">
                <h1>Contato</h1>
                <p className="subtitulo-pagina">Vamos conversar sobre seu projeto.</p>
            </section>

            {/* Grid principal (Formulário + Informações) */}
            <div className="grid-auto">
                {/* LADO ESQUERDO: Formulário */}
                <section className="card card-contato">
                    <h2 className="card-titulo-contato">Formulário</h2>

                    <form className="contato-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" placeholder="Digite seu nome completo" />
                        </div>

                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" placeholder="seuemail@exemplo.com" />
                        </div>

                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="tel" placeholder="(55) 99999-9999" />
                        </div>

                        <div className="form-group">
                            <label>Tipo de Projeto</label>
                            <select>
                                <option>Selecione uma opção</option>
                                <option>Criação de Site</option>
                                <option>Identidade Visual</option>
                                <option>Outros serviços</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Mensagem</label>
                            <textarea placeholder="Conte sua ideia..." rows="5"></textarea>
                        </div>

                        <button type="submit" className="btn btn-outline w-100">
                            Enviar Mensagem
                        </button>
                    </form>
                </section>

                {/* LADO DIREITO: Informações de Contato */}
                <section className="card card-contato">
                    <h2 className="card-titulo-contato">Informações</h2>

                    <div className="contato-info-list">
                        <div className="contato-info-item">
                            <span className="cargo">Localização</span>
                            <p className="contato-info-valor">Santa Rosa - RS</p>
                        </div>

                        <div className="contato-info-item">
                            <span className="cargo">E-mail profissional</span>
                            <p className="contato-info-valor">contato@studio.ambar</p>
                        </div>

                        <div className="contato-info-item">
                            <span className="cargo">Telefone / WhatsApp</span>
                            <p className="contato-info-valor">(55) 99999-9999</p>
                        </div>

                        <div className="contato-info-item">
                            <span className="cargo">Redes Sociais</span>
                            <p className="contato-info-valor">@studio.ambar</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Contato;