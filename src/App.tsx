import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria"
import FormCategoria from "./components/categorias/formcategorias/FormCategoria"
import ListaCategorias from "./components/categorias/listacategorias/ListaCategorias"
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto"
import FormProduto from "./components/produtos/formproduto/FormProduto"
import ListaProdutos from "./components/produtos/listaprodutos/ListaProdutos"


function App() {
	return (

			<BrowserRouter>
				<Navbar />
				<div className="min-h-[80vh] bg-cyan-100">
					<Routes>	
						<Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
						<Route path="/categorias" element={<ListaCategorias />} />
						<Route path="/cadastrarcategoria" element={<FormCategoria />} />
						<Route path="/editarcategoria/:id" element={<FormCategoria />} />
						<Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListaProdutos />} />
						<Route path="/cadastrarprodutos" element={<FormProduto />} />
						<Route path="/editarprodutos/:id" element={<FormProduto />} />
						<Route path="/deletarprodutos/:id" element={<DeletarProduto />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		
	)
}

export default App