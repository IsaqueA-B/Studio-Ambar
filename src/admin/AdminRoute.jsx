import { Navigate } from 'react-router-dom';

function AdminRoute({ children }) {
    const usuario = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!usuario || usuario.nivel_acesso !== 'admin') {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default AdminRoute;