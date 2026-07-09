import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

function CadastroProjeto() {
    const [clientes, setClientes] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [idCliente, setIdCliente] = useState("");
    const [idServico, setIdServico] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFinal, setDataFinal] = useState("");
    const [carregandoListas, setCarregandoListas] = useState(true);
    const [enviando, setEnviando] = useState(false);

    useEffect(() => {
        const buscarDados = async () => {
            try {
                const [resClientes, resServicos] = await Promise.all([
                    fetch(`${API_BASE}/clientes`),
                    fetch(`${API_BASE}/servicos`)
                ]);
                setClientes(await resClientes.json());
                setServicos(await resServicos.json());
            } catch (error) {
                console.error(error);
            } finally {
                setCarregandoListas(false);
            }
        };
        buscarDados();
    }, []);

    const validarFormulario = () => {
        if (!idCliente || !idServico) {
            alert("Cliente e serviço são obrigatórios.");
            return false;
        }
        if (!dataInicio.trim()) {
            alert("Data de início é obrigatória.");
            return false;
        }
        if (!dataFinal.trim()) {
            alert("Data final é obrigatória.");
            return false;
        }
        return true;
    };

    const cadastrarProjeto = async () => {
        if (!validarFormulario()) return;
        setEnviando(true);
        try {
            const response = await fetch(`${API_BASE}/projetos`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id_cliente: Number(idCliente),
                    id_servico: Number(idServico),
                    data_inicioProjeto: dataInicio,
                    data_finalProjeto: dataFinal,
                }),
            });
            const data = await response.json();
            if (!response.ok) {
                alert(data.erro || "Erro ao cadastrar projeto.");
                return;
            }
            alert("Projeto cadastrado com sucesso!");
            setIdCliente(""); setIdServico(""); setDataInicio(""); setDataFinal("");
        } catch (error) {
            console.error(error);
            alert("Erro ao conectar com o servidor.");
        } finally {
            setEnviando(false);
        }
    };

    return (
        <main className="p-20 animacao-entrada">
            <Link to="/admin" className="btn-voltar">← Voltar ao Administrativo </Link>

            <section className="text-center mb-20">
                <h1>Cadastrar Projeto</h1>
                <p>Preencha todos os campos obrigatórios.</p>
            </section>
            <section className="container">
                <div className="card formulario-servico">
                    <h2 className="card-titulo-contato sem-linha">Dados do Projeto</h2>
                    <form onSubmit={(e) => { e.preventDefault(); cadastrarProjeto(); }}>
                        <div className="form-group">
                            <label>Cliente *</label>
                            {carregandoListas ? <p>Carregando...</p> : (
                                <select value={idCliente} onChange={(e) => setIdCliente(e.target.value)} required>
                                    <option value="">Selecione</option>
                                    {clientes.map(c => <option key={c.id} value={c.id}>{c.nome_pessoa}{c.nome_empresa ? ` - ${c.nome_empresa}` : ''}</option>)}
                                </select>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Serviço *</label>
                            {carregandoListas ? <p>Carregando...</p> : (
                                <select value={idServico} onChange={(e) => setIdServico(e.target.value)} required>
                                    <option value="">Selecione</option>
                                    {servicos.map(s => <option key={s.id} value={s.id}>{s.tipo_servico} - R$ {Number(s.valor).toFixed(2)}</option>)}
                                </select>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Data de Início *</label>
                            <input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Data Final *</label>
                            <input type="date" value={dataFinal} onChange={(e) => setDataFinal(e.target.value)} required />
                        </div>
                        <div className="text-right">
                            <button className="btn" type="submit" disabled={enviando || carregandoListas}>
                                {enviando ? "Salvando..." : "Cadastrar Projeto"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default CadastroProjeto;