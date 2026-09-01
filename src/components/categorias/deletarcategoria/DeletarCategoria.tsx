import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import { ClipLoader } from "react-spinners";
import { CheckIcon, XIcon } from "@phosphor-icons/react";

function DeletarCategoria() {

    // Objeto responsável redirecionar o tema para uma outra rota
    const navigate = useNavigate();

    // Estado responsável por controlar o loader (animação de carregamento)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Estado responsável por armazenar os dados do tema que será deletado no Backend (API)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    // Acessar o parâmetro da rota (id do tema)
    const { id } = useParams<{ id: string }>();

    // Função responsável por buscar um tema pelo ID no Backend (API)
    async function buscarCategoriaPorId() {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(`Erro ao buscar a categoria (${error.response?.status})`)
            }
        }
    }

    // useEffect para monitorar o id (parâmetro da rota)
    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId();
        }
    }, [id])

    // Função responsável por deletar um tema pelo ID no Backend (API)
    async function deletarCategoria() {

        setIsLoading(true);

        try {
            await deletar(`/categorias/${id}`)
            alert('Categoria deletada com sucessso!')
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(`Erro ao deletar categoria (${error.response?.status})`);
            }
        } finally {
            setIsLoading(false);
        }

        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className='container w-full max-w-md px-4 pt-4 mx-auto md:pt-6'>
            <h1 className='py-4 text-3xl text-center md:text-4xl'>Deletar Categoria</h1>
            <p className='mb-4 text-base font-semibold text-center md:text-lg'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='flex flex-col justify-between overflow-hidden border rounded-2xl'>
                <header
                    className='px-4 py-2 text-lg font-bold text-white md:px-6 bg-indigo-900 md:text-2xl'>
                    Categoria
                </header>
                <p className='h-full p-4 text-xl bg-white md:p-8 md:text-3xl'>{categoria.nome}</p>
                <div className="flex flex-row">
                    <button
                        className='w-full py-2 text-base bg-red-400 text-slate-100 hover:bg-red-600 md:text-lg flex items-center justify-center cursor-pointer' 
                        onClick={retornar}
                    >
                        <XIcon size={20} />
                    </button>
                    <button
                        className='flex items-center justify-center w-full text-base bg-teal-600 text-slate-100 hover:bg-teal-700 md:text-lg cursor-pointer'
                        onClick={deletarCategoria}
                    >
                        {
                isLoading ? (
                      <ClipLoader
                        color="#ffffff"
                        size={24}
                      />
                  ):(
                    <span><CheckIcon size={20} /></span>
                  )
                }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria