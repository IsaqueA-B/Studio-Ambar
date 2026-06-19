import React from 'react';

const servicosEstaticos = [
    { nome: 'Identidade Visual', desc: 'Criação de logo, paleta de cores e tipografia.', valor: 'R$ 800' },
    { nome: 'Social Media', desc: 'Posts, stories e identidade para redes sociais.', valor: 'R$ 400/mês' },
    { nome: 'Papelaria Corporativa', desc: 'Cartão de visita, papel timbrado, assinatura de e-mail.', valor: 'R$ 350' },
    // Adicionar mais
];

function Servicos() {
    return (
        <main className="p-20 animacao-entrada">
            <section className="text-center mb-20">
                <h1>Nossos Serviços</h1>
                <p>Soluções criativas para sua marca.</p>
            </section>

            <div className="grid-3x3 mb-20">
                {servicosEstaticos.map((servico, i) => (
                    <div className="card" key={i}>
                        <h3>{servico.nome}</h3>
                        <p>{servico.desc}</p>
                        <p><strong>A partir de {servico.valor}</strong></p>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <p><em>Seção de FAQ opcional no futuro.</em></p>
            </div>
        </main>
    );
}

export default Servicos;