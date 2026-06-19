import React from 'react';
import { Link } from 'react-router-dom';

const postsEstaticos = [
    { id: 1, titulo: '5 tendências de branding para 2026', data: '10/06/2026', resumo: 'O que vai bombar no próximo ano.' },
    { id: 2, titulo: 'Como um bom design pode aumentar suas vendas', data: '05/06/2026', resumo: 'A importância da identidade visual.' },
];

function Blog() {
    return (
        <main className="p-20 animacao-entrada">
            <section className="text-center mb-20">
                <h1>Blog</h1>
                <p>Dicas, tendências e novidades do mundo do design.</p>
            </section>

            <div className="grid-3x3 mb-20">
                {postsEstaticos.map((post) => (
                    <Link to={`/blog/${post.id}`} className="btn-card" key={post.id}>
                        <div className="card">
                            <h3>{post.titulo}</h3>
                            <p><small>{post.data}</small></p>
                            <p>{post.resumo}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default Blog;