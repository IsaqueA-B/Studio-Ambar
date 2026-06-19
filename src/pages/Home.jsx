import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className="p-20 animacao-entrada">
            <section className="text-center mb-20">
                <h1>Studio Âmbar</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Transformamos ideias em marcas que conectam. Conheça nossos serviços e portfólio.
                </p>
            </section>

            <div className="grid-3x3 mb-20">
                <div className="card">
                    <h3>Hero Banner</h3>
                    <p>Imagem de fundo + título impactante + CTA "Ver portfólio" / "Solicitar orçamento".</p>
                </div>
                <div className="card">
                    <h3>Serviços em destaque</h3>
                    <p>3-4 cards (Identidade Visual, Social Media, etc.) com ícone, descrição e link /servicos.</p>
                </div>
                <div className="card">
                    <h3>Portfólio rápido</h3>
                    <p>Grid com 3 projetos (imagem, nome, categoria) + botão "Ver todos".</p>
                </div>
            </div>

            <div className="grid-3x3 mb-20">
                <div className="card">
                    <h3>Depoimentos</h3>
                    <p>2-3 depoimentos fictícios com foto, nome e texto.</p>
                </div>
                <div className="card">
                    <h3>CTA final</h3>
                    <p>Faixa colorida: "Vamos criar algo incrível?" + botão /contato.</p>
                </div>
            </div>
        </main>
    );
}

export default Home;