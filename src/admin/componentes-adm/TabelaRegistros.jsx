import React from 'react';

function TabelaRegistros({ colunas, dados }) {
    if (!dados || dados.length === 0) {
        return <p>Nenhum registro encontrado.</p>;
    }

    return (
        <div className="tabela-container">
            <table className="tabela-admin">
                <thead>
                    <tr>
                        {colunas.map((col) => (
                            <th key={col.key}>{col.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item) => (
                        <tr key={item.id}>
                            {colunas.map((col) => (
                                <td key={col.key}>
                                    {col.format ? col.format(item[col.key], item) : item[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaRegistros;