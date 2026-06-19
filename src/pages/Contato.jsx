import React, { useState } from 'react';

function Contato() {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Apenas simula envio
        setEnviado(true);
    };

    return (
        <main className="p-20 animacao-entrada">
            <section className="text-center mb-20">
                <h1>Contato</h1>
                <p>Vamos conversar sobre seu projeto.</p>
            </section>

            <div className="grid-3x3 mb-20">
                <div className="card">
                    <h3>Formulário</h3>
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Nome" required /><br />
                        <input type="email" placeholder="E-mail" required /><br />
                        <input placeholder="Telefone" /><br />
                        <select>
                            <option>Orçamento</option>
                            <option>Dúvida</option>
                            <option>Outros</option>
                        </select><br />
                        <textarea placeholder="Mensagem" required></textarea><br />
                        <button type="submit">Enviar</button>
                    </form>
                    {enviado && <p style={{ color: 'green' }}>Mensagem enviada (simulação)!</p>}
                </div>
                <div className="card">
                    <h3>Informações de contato</h3>
                    <p>Endereço fictício<br />
                        E-mail: contato@studioambar.com<br />
                        Telefone: (11) 99999-9999<br />
                        Redes sociais: ícones</p>
                </div>
            </div>
        </main>
    );
}

export default Contato;