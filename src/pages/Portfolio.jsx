import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../hooks/usePortfolio';

function Portfolio() {
  const { obterPortfolio } = usePortfolio();
  const [projetos, setProjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [filter, setFilter] = useState('Todos');

  const filters = ['Todos', 'Identidade Visual', 'Social Media', 'Web'];

  useEffect(() => {
    const buscarProjetos = async () => {
      try {
        setCarregando(true);
        const dados = await obterPortfolio();
        setProjetos(dados);
      } catch (err) {
        console.error(err);
        setErro('Erro ao carregar portfólio');
      } finally {
        setCarregando(false);
      }
    };

    buscarProjetos();
  }, []);

  if (carregando) return <main className="p-20"><p>Carregando portfólio...</p></main>;
  if (erro) return <main className="p-20"><p>{erro}</p></main>;

  const projetosFiltrados = (Array.isArray(projetos) ? projetos : []).filter((proj) => {
    if (filter === 'Todos') return true;
    const texto = `${proj.titulo || ''} ${proj.descricao || ''}`.toLowerCase();
    return texto.includes(filter.toLowerCase());
  });

  return (
    <main className="p-20 animacao-entrada">
      <section className="text-center mb-20">
        <h1>Portfólio</h1>
        <p>Conheça alguns dos nossos trabalhos.</p>
      </section>

      <div className="mb-20 text-center filter-bar">
        {filters.map((f) => (
          <button
            key={f}
            className={`btn ${filter === f ? 'active' : 'btn-outline'}`}
            onClick={() => setFilter(f)}
            type="button"
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid-3x3 mb-20">
        {projetosFiltrados.length > 0 ? (
          projetosFiltrados.map((proj) => (
            <Link to={`/portfolio/${proj.id}`} className="btn-card" key={proj.id}>
              <div className="card">
                <h3>{proj.titulo}</h3>
                <p>{proj.descricao}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>Nenhum projeto encontrado.</p>
        )}
      </div>
    </main>
  );
}

export default Portfolio;