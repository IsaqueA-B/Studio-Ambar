import { Routes, Route } from 'react-router-dom';
import Navbar from './componentes/layout/Navbar';
import Footer from './componentes/layout/Footer';
import { UserProvider } from './componentes/users/UserContext';
import { PrivateRoute } from './componentes/users/PrivateRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Teste from './pages/Teste';
import Projeto from './pages/Projeto';
import NotFound from './pages/NotFound';

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/projeto" element={
          <PrivateRoute>
            <Projeto />
          </PrivateRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </UserProvider>
  );
}

export default App;