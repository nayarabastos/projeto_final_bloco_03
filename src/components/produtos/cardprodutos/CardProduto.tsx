import { PencilIcon, TrashIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function CardProduto() {
	return (
		<div className="flex flex-col justify-between overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:shadow-md sm:min-h-[420px]">
			<div className="flex items-center justify-end gap-2 pt-3 pr-3">
				<Link to="/editarproduto" aria-label="Editar produto" className="text-slate-700 transition-colors hover:text-teal-700">
					<PencilIcon size={22} />
				</Link>

				<Link to="/deletarproduto" aria-label="Excluir produto" className="text-slate-700 transition-colors hover:text-red-700">
					<TrashIcon size={22} />
				</Link>
			</div>

			<div className="flex flex-1 flex-col justify-between px-3 pb-3 pt-2 sm:px-4">
				<img
					src="https://epocacosmeticos.vteximg.com.br/arquivos/ids/496312-800-800/therapiste--1-.jpg?v=637921947711270000"
					className="mx-auto mt-1 h-36 w-full max-w-[220px] object-cover sm:h-40"
					alt="Nome do Produto"
				/>

				<div className="px-2 pb-3 pt-4 text-center sm:px-3">
					<p className="text-xs uppercase tracking-wide text-slate-600 sm:text-sm">
						Máscara Capilar
					</p>
					<h3 className="mt-2 text-lg font-bold uppercase text-slate-800 sm:text-xl">
						R$ 199,90
					</h3>
					<p className="mt-1 text-xs italic text-slate-500 sm:text-sm">
						Categoria: Cosmético
					</p>
				</div>
			</div>

			<div className="flex flex-wrap">
				<button
					className="flex w-full items-center justify-center bg-teal-600 px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-800"
				>
					Comprar
				</button>
			</div>
		</div>
	)
}

export default CardProduto