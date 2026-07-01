import { buscarClientes, criarCliente, atualizarCliente, deletarCliente } from '../services/api';

export function useClientes() {
  const obterClientes = async () => {
    try {
      console.log('📡 Buscando clientes...');
      const resultado = await buscarClientes();
      console.log('✅ Clientes obtidos:', resultado);
      return resultado || [];
    } catch (error) {
      console.error('❌ Erro ao buscar clientes:', error);
      throw error;
    }
  };

  const criar = async (nome_pessoa, nome_empresa, telefone, email, cnpj, cep) => {
    try {
      const resultado = await criarCliente(nome_pessoa, nome_empresa, telefone, email, cnpj, cep);
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao criar cliente:', error);
      throw error;
    }
  };

  const atualizar = async (id, nome_pessoa, nome_empresa, telefone, email, cnpj, cep) => {
    try {
      const resultado = await atualizarCliente(id, nome_pessoa, nome_empresa, telefone, email, cnpj, cep);
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao atualizar cliente:', error);
      throw error;
    }
  };

  const deletar = async (id) => {
    try {
      const resultado = await deletarCliente(id);
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao deletar cliente:', error);
      throw error;
    }
  };

  return {
    obterClientes,
    criar,
    atualizar,
    deletar
  };
}
