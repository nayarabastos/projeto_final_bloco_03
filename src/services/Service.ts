import axios from 'axios'

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || 'https://farmacia-ug0p.onrender.com',
	headers: { 'Content-Type': 'application/json' },
})

// 1. Método GET (Listar todos ou Buscar por ID)
export const buscar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
}

// 2. Método POST (Cadastrar Categoria ou Produto)
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
}

// 3. Método PUT (Atualizar Categoria ou Produto)
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.put(url, dados);
  setDados(resposta.data);
}

// 4. Método DELETE (Deletar)
export const deletar = async (url: string) => {
  await api.delete(url);
}