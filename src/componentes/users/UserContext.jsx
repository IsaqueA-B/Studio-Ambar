import { createContext, useContext, useState, useEffect } from 'react';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Carregar usuário do localStorage ao iniciar
    useEffect(() => {
        const saved = localStorage.getItem('currentUser');
        if (saved) {
            try {
                setUser(JSON.parse(saved));
            } catch (error) {
                console.error('Erro ao carregar usuário:', error);
                localStorage.removeItem('currentUser');
            }
        }
        setLoading(false);
    }, []);

    // Login: valida no localStorage
    const login = (cpfDigitado, senha) => {
        try {
            const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
            const encontrado = usuarios.find(u => u.cpf === cpfDigitado && u.senha === senha);
            if (encontrado) {
                const { senha, ...userSemSenha } = encontrado;
                setUser(userSemSenha);
                localStorage.setItem('currentUser', JSON.stringify(userSemSenha));
                console.log('✅ Login do localStorage com sucesso');
                return true;
            }
            console.warn('❌ Credenciais inválidas no localStorage');
            return false;
        } catch (error) {
            console.error('❌ Erro ao fazer login:', error);
            return false;
        }
    };

    // Register: cria no banco, depois salva no localStorage
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
        <UserContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);