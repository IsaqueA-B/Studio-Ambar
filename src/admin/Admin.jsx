import React from 'react';
import AdminCadastros from './componentes-adm/AdminCadastros';
import AdminRegistros from './componentes-adm/AdminRegistros';

function Admin() {
    return (
        <main className="p-20 animacao-entrada admin-page">
            <section className="text-center mb-20">
                <h1> Administrativo</h1>
                <p>Gerencie clientes, serviços, projetos e portfólio do Studio Âmbar.</p>
            </section>

            <AdminCadastros />
            <AdminRegistros />
        </main>
    );
}

export default Admin;