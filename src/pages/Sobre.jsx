import React from 'react';

function Sobre() {
    return (
        <main className="p-20 animacao-entrada">
            <section className="text-center mb-20">
                <h1>Sobre o Studio Âmbar</h1>
                <p>Conheça nossa história, equipe e o que nos move.</p>
            </section>

            <div className="grid-3x3 mb-20">
                <div className="card">
                    <h3>Banner interno</h3>
                    <p>Imagem de fundo neutra + título "Sobre".</p>
                </div>
                <div className="card">
                    <h3>Nossa História</h3>
                    <p>Texto em 3-4 parágrafos sobre a origem do estúdio. Opcional: linha do tempo simples.</p>
                </div>
                <div className="card">
                    <h3>Missão, Visão e Valores</h3>
                    <p>Cards ou colunas com ícones. Frases prontas: Missão, Visão, Valores.</p>
                </div>
            </div>

            <div className="grid-3x3 mb-20">
                <div className="card">
                    <h3>Ícone + Slogan</h3>
                    <p>Logotipo ou símbolo com o slogan "Sua marca, nossa essência" em faixa colorida.</p>
                </div>
                <div className="card">
                    <h3>Equipe</h3>
                    <p>3-5 cards com foto (placeholder), nome, cargo e breve descrição.</p>
                </div>
                <div className="card">
                    <h3>Diferenciais</h3>
                    <p>Ícones e textos: Atendimento próximo, Projetos sob medida, Resultados que falam.</p>
                </div>
            </div>
        </main>
    );
}

export default Sobre;