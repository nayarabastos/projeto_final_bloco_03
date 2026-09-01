import CardProdutos from '../cardprodutos/CardProduto';

function ListaProdutos() {
	return (
		<>
			<div className="flex justify-center px-3 py-4 sm:px-4 md:mt-6 md:px-6">
				<div className="container flex flex-col">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
						<CardProdutos />
					</div>
				</div>
			</div>
		</>
	)
}

export default ListaProdutos