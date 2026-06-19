import React from 'react';
import { Link } from 'react-router-dom';

const projetosEstaticos = [
    { id: 1, nome: 'Doce Sabor Confeitaria', categoria: 'Identidade Visual', desc: 'Nova identidade e embalagens.' },
    { id: 2, nome: 'TechStart', categoria: 'Branding & Web', desc: 'Marca e site institucional.' },
    { id: 3, nome: 'Café do Zé', categoria: 'Logo & Social', desc: 'Logo e templates para redes sociais.' },
    // Adicionar mais
];

function Portfolio() {
    return (
        <main className="p-20 animacao-entrada">
            <section className="text-center mb-20">
                <h1>Portfólio</h1>
                <p>Conheça alguns dos nossos trabalhos.</p>
            </section>

            {/* Filtros futuros (opcional) */}
            <div className="mb-20 text-center">
                <button>Todos</button>
                <button>Identidade Visual</button>
                <button>Social Media</button>
                <button>Web</button>
            </div>

            <div className="grid-3x3 mb-20">
                {projetosEstaticos.map((proj) => (
                    <Link to={`/portfolio/${proj.id}`} className="btn-card" key={proj.id}>
                        <div className="card">
                            <h3>{proj.nome}</h3>
                            <p><small>{proj.categoria}</small></p>
                            <p>{proj.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default Portfolio;