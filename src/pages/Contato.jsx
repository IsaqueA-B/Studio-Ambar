import React, { useState } from 'react';
import { useContatos } from '../hooks/useContatos';

function Contato() {
    const { criarContato } = useContatos();
    const [form, setForm] = useState({
        nome: '',
        email: '',
        telefone: '',
        tipoProjeto: '',
        mensagem: ''
    });
    const [enviando, setEnviando] = useState(false);
    const [statusMensagem, setStatusMensagem] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEnviando(true);
        setStatusMensagem('');

        try {
            await criarContato(form.nome, form.telefone, form.email);
            setStatusMensagem('Mensagem enviada com sucesso e registrada no banco.');
            setForm({ nome: '', email: '', telefone: '', tipoProjeto: '', mensagem: '' });
        } catch (error) {
            console.error(error);
            setStatusMensagem(error.message || 'Não foi possível enviar a mensagem.');
        } finally {
            setEnviando(false);
        }
    };

    return (
        <main className="contato-container animacao-entrada p-20">

            <section className="page-hero text-center">
                <div className="page-hero-container">
                    <div className="page-hero-content">
                        <h1 className="page-title">Contato</h1>
                        <p className="page-subtitle">Nossas Redes • Como Contatar</p>
                    </div>
                    <div className="sobre-slogan-box">
                        <span className="sobre-slogan fonte-titulo">
                            Vamos conversar sobre seu projeto.
                        </span>
                    </div>
                </div>
            </section>

            {/* Grid principal (Formulário + Informações) */}
            <div className="grid-auto">
                {/* LADO ESQUERDO: Formulário */}
                <section className="card card-contato">
                    <h2 className="card-titulo-contato">Formulário</h2>

                    <form className="contato-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Nome</label>
                            <input name="nome" value={form.nome} onChange={handleChange} type="text" placeholder="Digite seu nome completo" required />
                        </div>

                        <div className="form-group">
                            <label>E-mail</label>
                            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="seuemail@exemplo.com" required />
                        </div>

                        <div className="form-group">
                            <label>Telefone</label>
                            <input name="telefone" value={form.telefone} onChange={handleChange} type="tel" placeholder="(55) 99999-9999" />
                        </div>

                        <div className="form-group">
                            <label>Tipo de Projeto</label>
                            <select name="tipoProjeto" value={form.tipoProjeto} onChange={handleChange}>
                                <option>Selecione uma opção</option>
                                <option>Criação de Site</option>
                                <option>Identidade Visual</option>
                                <option>Outros serviços</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Mensagem</label>
                            <textarea name="mensagem" value={form.mensagem} onChange={handleChange} placeholder="Conte sua ideia..." rows="5"></textarea>
                        </div>

                        <button type="submit" className="btn btn-outline w-100" disabled={enviando}>
                            {enviando ? 'Enviando...' : 'Enviar Mensagem'}
                        </button>
                        {statusMensagem ? <p style={{ marginTop: '10px' }}>{statusMensagem}</p> : null}
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