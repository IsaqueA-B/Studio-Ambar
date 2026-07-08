import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './componentes/layout/ScrollToTop';
import Navbar from './componentes/layout/Navbar';
import Footer from './componentes/layout/Footer';
import { UserProvider } from './componentes/users/UserContext';
import { PrivateRoute } from './componentes/users/PrivateRoute';


//===PAGINAS===
import Admin from './pages/Admin';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Portfolio from './pages/Portfolio';
import PortfolioCase from './pages/PortfolioCase';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import CadastrosServico from './pages/CadastrosServicos';
import CadastroPortifolio from './pages/CadastroPortifolio';
import CadastroBlog from './pages/CadastroBlog';

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
          <Route path="/cadastroServico" element={<CadastrosServico />} />
          <Route path="/CadastroPortifolio" element={<CadastroPortifolio />} />
          <Route path="/CadastroBlog" element={<CadastroBlog />} />

          <Route path="/Admin" element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;