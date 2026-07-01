import { useEffect, useState } from "react";
import { useServicos } from "../hooks/useServicos";

function Servicos() {
  const { obterServicos } = useServicos();
  const [servicos, setServicos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarServicos = async () => {
      try {
        setCarregando(true);
        const dados = await obterServicos();
        setServicos(dados);
      } catch (err) {
        console.error(err);
        setErro('Erro ao carregar serviços');
      } finally {
        setCarregando(false);
      }
    };

    buscarServicos();
  }, [obterServicos]);

  if (carregando) return <main className="p-20"><p>Carregando serviços...</p></main>;
  if (erro) return <main className="p-20"><p>{erro}</p></main>;

  return (
    <main className="p-20 animacao-entrada">
      <section className="text-center mb-20">
        <h1>Nossos Serviços</h1>
        <p>Soluções criativas para sua marca.</p>
      </section>

      <div className="grid-3x3">
        {Array.isArray(servicos) && servicos.length > 0 ? (
          servicos.map((servico) => (
            <div className="card" key={servico.id}>
              <h3>{servico.tipo_servico}</h3>
              <p><strong>R$ {servico.valor}</strong></p>
              {servico.prazo && <p>Prazo: {servico.prazo} dias</p>}
            </div>
          ))
        ) : (
          <p>Nenhum serviço disponível.</p>
        )}
      </div>
    </main>
  );
}

export default Servicos;