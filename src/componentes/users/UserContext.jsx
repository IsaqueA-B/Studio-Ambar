import { createContext, useContext, useState, useEffect } from 'react';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem('currentUser');
        if (saved) setUser(JSON.parse(saved));
    }, []);

    const login = (cpfDigitado, senha) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const encontrado = usuarios.find(u => u.cpf === cpfDigitado && u.senha === senha);
        if (encontrado) {
            const { senha, ...userSemSenha } = encontrado;
            setUser(userSemSenha);
            localStorage.setItem('currentUser', JSON.stringify(userSemSenha));
            return true;
        }
        return false;
    };

    const register = (dados) => {
        if (!cpfValidator.isValid(dados.cpf)) {
            return { sucesso: false, mensagem: 'CPF inválido.' };
        }
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        if (usuarios.some(u => u.cpf === dados.cpf || u.email === dados.email)) {
            return { sucesso: false, mensagem: 'CPF ou email já cadastrado.' };
        }
        const novoUsuario = { ...dados };
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        const { senha, ...userSemSenha } = novoUsuario;
        setUser(userSemSenha);
        localStorage.setItem('currentUser', JSON.stringify(userSemSenha));
        return { sucesso: true };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('currentUser');
    };

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);