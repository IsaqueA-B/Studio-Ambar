import React, { useState } from "react";
import { aplicarMascaraCNPJ, aplicarMascaraCEP, aplicarMascaraTelefone } from "../componentes/users/Mascaras";

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

function CadastroCliente() {
    const [nomePessoa, setNomePessoa] = useState("");
    const [nomeEmpresa, setNomeEmpresa] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [cep, setCep] = useState("");
    const [carregando, setCarregando] = useState(false);

    const validarFormulario = () => {
        if (!nomePessoa.trim() || !nomeEmpresa.trim() || !email.trim()) {
            alert("Nome da pessoa, nome da empresa e e-mail são obrigatórios.");
            return false;
        }
        // Valida telefone (pelo menos 10 dígitos)
        const telNumeros = telefone.replace(/\D/g, '');
        if (telNumeros.length < 10) {
            alert("Telefone inválido. Informe um número com DDD (10 ou 11 dígitos).");
            return false;
        }
        // Valida CNPJ (14 dígitos)
        const cnpjNumeros = cnpj.replace(/\D/g, '');
        if (cnpjNumeros.length !== 14) {
            alert("CNPJ inválido. Deve conter 14 dígitos.");
            return false;
        }
        // Valida CEP (8 dígitos)
        const cepNumeros = cep.replace(/\D/g, '');
        if (cepNumeros.length !== 8) {
            alert("CEP inválido. Deve conter 8 dígitos.");
            return false;
        }
        return true;
    };

    const cadastrarCliente = async () => {
        if (!validarFormulario()) return;

        setCarregando(true);
        try {
            const response = await fetch(`${API_BASE}/clientes`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nome_pessoa: nomePessoa.trim(),
                    nome_empresa: nomeEmpresa.trim(),
                    telefone: telefone.trim(),
                    email: email.trim(),
                    cnpj: cnpj.trim(),
                    cep: cep.trim(),
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                alert(data.erro || "Erro ao cadastrar cliente.");
                return;
            }

            alert("Cliente cadastrado com sucesso!");
            setNomePessoa(""); setNomeEmpresa(""); setTelefone("");
            setEmail(""); setCnpj(""); setCep("");
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao conectar com o servidor.");
        } finally {
            setCarregando(false);
        }
    };

    return (
        <main className="p-20 animacao-entrada">
            <section className="text-center mb-20">
                <h1>Cadastrar Cliente</h1>
                <p>Preencha todos os campos obrigatórios.</p>
            </section>
            <section className="container">
                <div className="card formulario-servico">
                    <h2 className="card-titulo-contato sem-linha">Dados do Cliente</h2>
                    <form onSubmit={(e) => { e.preventDefault(); cadastrarCliente(); }}>
                        {/* Campos com required e máscaras */}
                        <div className="form-group">
                            <label>Nome da Pessoa *</label>
                            <input type="text" value={nomePessoa} onChange={(e) => setNomePessoa(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Nome da Empresa *</label>
                            <input type="text" value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Telefone *</label>
                            <input type="text" value={telefone} onChange={(e) => setTelefone(aplicarMascaraTelefone(e.target.value))} placeholder="(11) 99999-9999" required />
                        </div>
                        <div className="form-group">
                            <label>Email *</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>CNPJ *</label>
                            <input type="text" value={cnpj} onChange={(e) => setCnpj(aplicarMascaraCNPJ(e.target.value))} placeholder="00.000.000/0000-00" required />
                        </div>
                        <div className="form-group">
                            <label>CEP *</label>
                            <input type="text" value={cep} onChange={(e) => setCep(aplicarMascaraCEP(e.target.value))} placeholder="00000-000" required />
                        </div>
                        <div className="text-right">
                            <button className="btn" type="submit" disabled={carregando}>
                                {carregando ? "Salvando..." : "Cadastrar Cliente"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default CadastroCliente;