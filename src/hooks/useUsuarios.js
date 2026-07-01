import { buscarUsuarios, criarUsuario, atualizarUsuario, deletarUsuario } from '../services/api';

export function useUsuarios() {
  const obterUsuarios = async () => {
    try {
      console.log('📡 Buscando usuários...');
      const resultado = await buscarUsuarios();
      console.log('✅ Usuários obtidos:', resultado);
      return resultado || [];
    } catch (error) {
      console.error('❌ Erro ao buscar usuários:', error);
      throw error;
    }
  };

  const criar = async (nome, gmail, senha, nivel_acesso = 'visualizador', cpf) => {
    try {
      console.log('📡 Criando usuário:', { nome, gmail });
      const resultado = await criarUsuario(nome, gmail, senha, nivel_acesso, cpf);
      console.log('✅ Usuário criado:', resultado);
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao criar usuário:', error);
      throw error;
    }
  };

  const atualizar = async (id, nome, gmail, senha, nivel_acesso, cpf) => {
    try {
      const resultado = await atualizarUsuario(id, nome, gmail, senha, nivel_acesso, cpf);
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao atualizar usuário:', error);
      throw error;
    }
  };

  const deletar = async (id) => {
    try {
      const resultado = await deletarUsuario(id);
      return resultado;
    } catch (error) {
      console.error('❌ Erro ao deletar usuário:', error);
      throw error;
    }
  };

  return {
    obterUsuarios,
    criar,
    atualizar,
    deletar
  };
}
