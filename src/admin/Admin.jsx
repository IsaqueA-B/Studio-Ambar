import React from 'react';
import AdminCadastros from './componentes-adm/AdminCadastros';
import AdminRegistros from './componentes-adm/AdminRegistros';

function Admin() {
    return (
        <main className="p-20 animacao-entrada admin-page">

            <section className="page-hero text-center">
                <div className="page-hero-container">
                    <div className="page-hero-content">
                        <h1 className="page-title">Administrativo</h1>
                        <p className="page-subtitle">Gerencie clientes, serviços, projetos e portfólio do Studio Âmbar.</p>
                    </div>
                </div>
            </section>
            <AdminCadastros />
            <AdminRegistros />
        </main>
    );
}

export default Admin;