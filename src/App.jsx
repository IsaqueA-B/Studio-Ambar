import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './componentes/users/UserContext';
import { PrivateRoute } from './componentes/users/PrivateRoute';


//===NAVEGAÇÃO===
import ScrollToTop from './componentes/layout/ScrollToTop';
import Navbar from './componentes/layout/Navbar';
import Footer from './componentes/layout/Footer';
import NotFound from './pages/NotFound';

//===PAGINAS===
import Admin from './pages/Admin';
import AdminRoute from './componentes/users/AdminRoute';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Portfolio from './pages/Portfolio';
import PortfolioCase from './pages/PortfolioCase';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contato from './pages/Contato';
import Home from './pages/Home';

//===LOGAR===
import Login from './pages/Login';
import Register from './pages/Register';

//===CADASTROS===
import CadastroServico from './cadastro/CadastroServico';
import CadastroPortifolio from './cadastro/CadastroPortifolio';
import CadastroCliente from './cadastro/CadastroCliente';
import CadastroProjeto from './cadastro/CadastroProjeto'

function App() {
  return (
    <UserProvider>
      <ScrollToTop />
      <Navbar />
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioCase />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastroServico" element={<CadastroServico />} />
          <Route path="/cadastroPortifolio" element={<CadastroPortifolio />} />
          <Route path="/cadastroCliente" element={<CadastroCliente />} />
          <Route path="/cadastroProjeto" element={<CadastroProjeto />} />
          <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;