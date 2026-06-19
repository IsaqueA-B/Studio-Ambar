import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className="p-20 animacao-entrada">
            <section className="text-center mb-20">
                <h1>Bem-vindo ao Template Base</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Este é um ponto de partida para seus projetos React. Navegue pelos exemplos de componentes e páginas.
                </p>
            </section>

            <div className="grid-3x3 mb-20">
                <Link to="/" className="btn-card">
                    <div className="card">
                        <h3>Exemplos de UI</h3>
                        <p>Cards, botões, grids e muito mais.</p>
                    </div>
                </Link>
                <Link to="/admin" className="btn-card">
                    <div className="card">
                        <h3>ADM TESTE</h3>
                        <p>O adm vai ser uma rota privada</p>
                    </div>
                </Link>
                <div className="card">
                    <h3>Autenticação</h3>
                    <p>Login, cadastro, rota privada.</p>
                </div>
            </div>
        </main >
    );
}

export default Home;