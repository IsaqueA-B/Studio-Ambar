import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext';

export function PrivateRoute({ children }) {
    const { user, loading } = useUser();
    
    // Enquanto carrega, não mostra nada (evita redirect prematuro)
    if (loading) {
        return null;
    }
    
    // Se não tem usuário, redireciona para login
    return user ? children : <Navigate to="/login" />;
}