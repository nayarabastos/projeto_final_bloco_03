import ModalProduto from "../../components/produtos/modalproduto/ModalProduto"

function Home() {
	return (
		<>
			<div className="flex justify-center bg-cyan-100 min-h-[50vh] py-8 md:min-h-[70vh] md:py-0">
				<div className="container grid grid-cols-1 gap-6 px-4 text-black md:grid-cols-2 md:px-6">
					<div className="flex flex-col items-center justify-center gap-4 py-4 text-center md:gap-2 md:py-8">
						<h2 className="text-3xl font-bold md:text-5xl">
							Seja bem vinde!
						</h2>
						<p className="text-base md:text-xl">
							Aqui você encontra Medicamentos e Cosméticos!
						</p>

						<div className="flex w-full justify-center pt-2 md:pt-6">
							<ModalProduto />
						</div>
					</div>

					<div className="flex items-center justify-center w-full">
						<img
							src="https://i.imgur.com/0Diz00D.png"
							alt="Imagem Página Home"
							className="mx-auto h-52 w-2/3 object-contain md:h-80 lg:h-96"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home