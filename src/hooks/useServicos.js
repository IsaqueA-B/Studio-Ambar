import { useCallback } from 'react';
import { buscarServicos, criarServico, atualizarServico, deletarServico } from '../services/api';

export function useServicos() {
  const obterServicos = async () => {
    try {
      console.log('📡 Buscando serviços...');
      const resultado = await buscarServicos();
      console.log('✅ Serviços obtidos:', resultado);
      if (!Array.isArray(resultado)) {
        throw new Error('Resposta inválida ao buscar serviços');
      }
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao buscar serviços:', error);
      throw error;
    }
  };

  const criar = useCallback(async (tipo_servico, valor, prazo) => {
    try {
      console.log('📡 Criando serviço:', { tipo_servico, valor, prazo });
      const resultado = await criarServico(tipo_servico, valor, prazo);
      console.log('✅ Serviço criado:', resultado);
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao criar serviço:', error);
      throw error;
    }
  }, []);

  const atualizar = useCallback(async (id, tipo_servico, valor, prazo) => {
    try {
      const resultado = await atualizarServico(id, tipo_servico, valor, prazo);
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao atualizar serviço:', error);
      throw error;
    }
  }, []);

  const deletar = useCallback(async (id) => {
    try {
      const resultado = await deletarServico(id);
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao deletar serviço:', error);
      throw error;
    }
  }, []);

  return {
    obterServicos,
    criar,
    atualizar,
    deletar
  };
}
