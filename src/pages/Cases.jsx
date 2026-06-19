import React from 'react';
import { Link } from 'react-router-dom';

const casesEstaticos = [
    { id: 1, titulo: 'Doce Sabor Confeitaria', resumo: 'Como aumentamos encomendas em 40% com nova identidade.' },
    { id: 2, titulo: 'TechStart', resumo: 'Do zero a uma marca reconhecida no mercado de tecnologia.' },
];

function Cases() {
    return (
        <main className="p-20 animacao-entrada">
            <section className="text-center mb-20">
                <h1>Cases de Sucesso</h1>
                <p>Resultados reais dos nossos projetos.</p>
            </section>

            <div className="grid-3x3 mb-20">
                {casesEstaticos.map((c) => (
                    <Link to={`/cases/${c.id}`} className="btn-card" key={c.id}>
                        <div className="card">
                            <h3>{c.titulo}</h3>
                            <p>{c.resumo}</p>
                            <span>Ler case completo →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default Cases;