import axios from "axios";
import { useState, useEffect } from "react";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategorias/Cardcategoria";
import type Categoria from "../../../models/Categoria";
import { SyncLoader } from "react-spinners";

function ListaCategorias() {

	// Estado responsável por controlar o loader (animação de carregamento)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	// Estado responsável por armazenar todos os temas persistidos no Backend (API)
	const [categorias, setCategorias] = useState<Categoria[]>([])

	// useEffect responsável por executar a funcção buscarTemas
	useEffect(() => {
		buscarCategorias()
	}, [categorias.length])

	// Função responsável por buscar todos os temas no Backend (API)
	async function buscarCategorias() {
		setIsLoading(true)

		try {
			await buscar(`/categorias`, setCategorias)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				alert(`Erro ao buscar as categorias (${error.response?.status})`)
			}
		} finally {
			setIsLoading(false)
		}
	}



	return (
		<>
			{isLoading && (
				<div className="flex justify-center w-full my-8">
					<SyncLoader color="#312e81" size={32} />
				</div>
			)}
			<div className="flex justify-center w-full overflow-x-hidden">
				<div className="box-border w-full px-4 py-4 mt-8 mb-4 max-w-8xl sm:px-6 md:px-8 lg:px-12 md:py-6">
					{!isLoading && categorias.length === 0 && (
						<span className="text-3xl text-center my-8">
							Nenhuma Categoria foi encontrada!
						</span>
					)}
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-4 md:mb-0">
						{categorias.map((categoria) => (
							<CardCategoria key={categoria.id} categoria={categoria} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default ListaCategorias