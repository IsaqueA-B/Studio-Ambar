import { useCallback } from 'react';
import { buscarPortfolio, criarPortfolio, atualizarPortfolio, deletarPortfolio } from '../services/api';

export function usePortfolio() {
  const obterPortfolio = async () => {
    try {
      console.log('📡 Buscando portfólio...');
      const resultado = await buscarPortfolio();
      console.log('✅ Portfólio obtido:', resultado);
      if (!Array.isArray(resultado)) {
        throw new Error('Resposta inválida ao buscar portfólio');
      }
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao buscar portfólio:', error);
      throw error;
    }
  };

  const criar = useCallback(async (id_projeto, titulo, descricao) => {
    try {
      const resultado = await criarPortfolio(id_projeto, titulo, descricao);
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao criar portfólio:', error);
      throw error;
    }
  }, []);

  const atualizar = useCallback(async (id, id_projeto, titulo, descricao) => {
    try {
      const resultado = await atualizarPortfolio(id, id_projeto, titulo, descricao);
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao atualizar portfólio:', error);
      throw error;
    }
  }, []);

  const deletar = useCallback(async (id) => {
    try {
      const resultado = await deletarPortfolio(id);
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao deletar portfólio:', error);
      throw error;
    }
  }, []);

  return {
    obterPortfolio,
    criar,
    atualizar,
    deletar
  };
}
