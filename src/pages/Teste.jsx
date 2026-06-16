import React from 'react';
import { Link } from 'react-router-dom';
import { gerarPDFExemplo } from '../ferramentas/gerarPDF';

function Teste() {
    return (
        <main className="p-20 animacao-entrada">
            <h1>Página de Exemplos</h1>

            {/* Cards básicos */}
            <h2>Cards padrão (grid 3x3)</h2>
            <div className="grid-3x3 mb-20">
                <div className="card"><p>Card normal</p></div>
                <div className="card card-rounded"><p>Card arredondado</p></div>
                <div className="card card-square"><p>Card quadrado</p></div>
                <div className="card card-clickable" onClick={() => alert('Clicou no card!')}>
                    <p>Card clicável (com onClick)</p>
                </div>
                <Link to="/projeto" className="btn-card">
                    <div className="card"><p>Card como link (btn-card)</p></div>
                </Link>
                {/* Card que gera o PDF */}
                <div className="card card-clickable" onClick={gerarPDFExemplo}
                    style={{ background: 'var(--brand-gray)', cursor: 'pointer' }}>
                    <p>📄 Clique para baixar PDF de exemplo</p>
                </div>
            </div>

            {/* Grid 4x4 */}
            <h2>Grid 4x4</h2>
            <div className="grid-4x4 mb-20">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <div key={i} className="card card-rounded">
                        <p className="text-center">Item {i}</p>
                    </div>
                ))}
            </div>

            {/* Botões */}
            <h2>Botões</h2>
            <div className="flex-row gap-20 mb-20">
                <button className="btn">Primário</button>
                <button className="btn btn-outline">Outline</button>
                <button className="btn-icon" title="Ícone">🔍</button>
                <button className="btn-icon" title="Outro">⚙️</button>
                <button className="btn" disabled>Desabilitado</button>
            </div>
            
        </main >
    );
}

export default Teste;




