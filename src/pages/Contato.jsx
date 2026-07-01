import React from 'react';
export default function Contato() {
    return (
        <div className="contato-container">
            {/* Cabeçalho de Contato */}
            <header className="contato-header">
                <h1 className="contato-title">CONTATO</h1>
                <p className="contato-subtitle">Vamos conversar sobre seu projeto.</p>
            </header>

            {/* Grid que coloca Formulário e Informações lado a lado */}
            <div className="contato-main-grid">

                {/* LADO ESQUERDO: Formulário */}
                <section className="contato-card">
                    <div className="contato-card-content">
                        <div className="contato-title-wrapper">
                            <div className="contato-orange-bar"></div>
                            <h2 className="contato-card-title">Formulário</h2>
                        </div>

                        <form className="contato-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="contato-input-group">
                                <label className="contato-label">Nome</label>
                                <input type="text" className="contato-input" placeholder="Digite seu nome completo" />
                            </div>

                            <div className="contato-input-group">
                                <label className="contato-label">E-mail</label>
                                <input type="email" className="contato-input" placeholder="seuemail@exemplo.com" />
                            </div>

                            <div className="contato-input-group">
                                <label className="contato-label">Telefone</label>
                                <input type="tel" className="contato-input" placeholder="(55) 99999-9999" />
                            </div>

                            <div className="contato-input-group">
                                <label className="contato-label">Tipo de Projeto</label>
                                <select className="contato-select">
                                    <option>Selecione uma opção</option>
                                    <option>Criação de Site</option>
                                    <option>Identidade Visual</option>
                                    <option>Outros serviços</option>
                                </select>
                            </div>

                            <div className="contato-input-group">
                                <label className="contato-label">Mensagem</label>
                                <textarea className="contato-textarea" placeholder="Conte sua ideia..."></textarea>
                            </div>

                            <button type="submit" className="contato-button">Enviar Mensagem →</button>
                        </form>
                    </div>
                </section>

                {/* LADO DIREITO: Informações de Contato */}
                <section className="contato-card">
                    <div className="contato-card-content">
                        <div className="contato-title-wrapper">
                            <div className="contato-orange-bar"></div>
                            <h2 className="contato-card-title">Informações</h2>
                        </div>

                        <div className="contato-info-list">
                            <div className="contato-info-item">
                                <span className="contato-info-label">Localização</span>
                                <p className="contato-info-value">Santa Rosa - RS</p>
                            </div>

                            <div className="contato-info-item">
                                <span className="contato-info-label">E-mail profissional</span>
                                <p className="contato-info-value">contato@studio.ambar</p>
                            </div>

                            <div className="contato-info-item">
                                <span className="contato-info-label">Telefone / WhatsApp</span>
                                <p className="contato-info-value">(55) 99999-9999</p> {/* Sugestão de número */}
                            </div>

                            <div className="contato-info-item">
                                <span className="contato-info-label">Redes Sociais</span>
                                <p className="contato-info-value">@studio.ambar</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}