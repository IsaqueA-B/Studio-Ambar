import { useState } from 'react';
import { useContatos } from '../hooks/useContatos';

export default function Contato() {
    const { criarContato } = useContatos();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);

        try {
            await criarContato(nome, telefone, email);
            setStatus({ type: 'success', message: 'Mensagem enviada com sucesso!' });
            setNome('');
            setEmail('');
            setTelefone('');
        } catch (error) {
            setStatus({ type: 'error', message: error.message || 'Erro ao enviar mensagem.' });
        }
    };

    return (
        <div className="contato-container">
            <header className="contato-header">
                <h1 className="contato-title">CONTATO</h1>
                <p className="contato-subtitle">Vamos conversar sobre seu projeto.</p>
            </header>

            <div className="contato-main-grid">
                <section className="contato-card">
                    <div className="contato-card-content">
                        <div className="contato-title-wrapper">
                            <div className="contato-orange-bar"></div>
                            <h2 className="contato-card-title">Formulário</h2>
                        </div>

                        <form className="contato-form" onSubmit={handleSubmit}>
                            <div className="contato-input-group">
                                <label className="contato-label">Nome</label>
                                <input
                                    type="text"
                                    className="contato-input"
                                    placeholder="Digite seu nome completo"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="contato-input-group">
                                <label className="contato-label">E-mail</label>
                                <input
                                    type="email"
                                    className="contato-input"
                                    placeholder="seuemail@exemplo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="contato-input-group">
                                <label className="contato-label">Telefone</label>
                                <input
                                    type="tel"
                                    className="contato-input"
                                    placeholder="(55) 99999-9999"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                />
                            </div>


                            <button type="submit" className="contato-button">Enviar Mensagem →</button>
                            {status && (
                                <p className={`contato-status ${status.type}`}>
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </div>
                </section>

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
                                <p className="contato-info-value">(55) 99999-9999</p>
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