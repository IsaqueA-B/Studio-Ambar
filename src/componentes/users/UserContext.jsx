import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Recupera usuário salvo na sessão
    useEffect(() => {
        const saved = localStorage.getItem('currentUser');
        if (saved) {
            try {
                setUser(JSON.parse(saved));
            } catch {
                localStorage.removeItem('currentUser');
            }
        }
        setLoading(false);
    }, []);

    // Login via API
    const login = async (email, senha) => {
        const resposta = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        });

        if (!resposta.ok) {
            const erro = await resposta.json();
            throw new Error(erro.erro || 'Falha no login');
        }

        const usuario = await resposta.json();
        setUser(usuario);
        localStorage.setItem('currentUser', JSON.stringify(usuario));
        return usuario;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('currentUser');
    };

    return (
        <UserContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);