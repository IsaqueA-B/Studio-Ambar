import { criarContato as criarContatoAPI, buscarContatos as buscarContatosAPI } from '../../services/api';

export function useContatos() {
  const obterContatos = async () => {
    try {
      console.log('📡 Buscando contatos...');
      const resultado = await buscarContatosAPI();
      console.log('✅ Contatos obtidos:', resultado);
      return resultado || [];
    } catch (error) {
      console.error('❌ Erro ao buscar contatos:', error);
      throw error;
    }
  };

  const criarContato = async (nome, telefone, email, tipo_projeto, mensagem) => {
    try {
      console.log('🚀 Tentando enviar para backend:', { nome, telefone, email, tipo_projeto, mensagem });
      const resultado = await criarContatoAPI(nome, telefone, email, tipo_projeto, mensagem);
      console.log('✅ Resposta do backend:', resultado);
      
      if (!resultado) {
        throw new Error('Backend retornou resposta vazia');
      }
      
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao comunicar com backend:', error);
      throw error;
    }
  };

  return {
    criarContato,
    obterContatos
  };
}
