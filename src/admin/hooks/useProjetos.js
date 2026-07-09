import { useCallback } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

export function useProjetos() {
    const obterProjetos = async () => {
        try {
            const response = await fetch(`${API_BASE}/projetos`);
            const data = await response.json();
            return Array.isArray(data) ? data : [];
        } catch (error) {
            console.error('❌ Erro ao buscar projetos:', error);
            throw error;
        }
    };

    const deletarProjeto = async (id) => {
        try {
            const response = await fetch(`${API_BASE}/projetos/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Falha ao deletar');
            return await response.json();
        } catch (error) {
            console.error('❌ Erro ao deletar projeto:', error);
            throw error;
        }
    };

    return { obterProjetos, deletarProjeto };
}