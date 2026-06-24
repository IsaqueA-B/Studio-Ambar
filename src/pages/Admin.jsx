import React from 'react';
import { Link } from 'react-router-dom';

function Admin() {
    return (
        <main className="p-20 animacao-entrada">
            <section className="text-center mb-20">
                <h1>ADMIN</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Aqui vai ser a area administrativa do site, onde o usuário com permissão tera acesso.
                </p>
            </section>

        </main >
    );
}

export default Admin;