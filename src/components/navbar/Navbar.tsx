import { ShoppingCartIcon, ListIcon, UserIcon, XIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { useState } from "react"
import SearchForm from "./SearchForm"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <div className="w-full flex justify-center py-4 text-white bg-indigo-900 md:py-2">
                <div className="container flex items-center justify-between mx-6 mt-2 text-lg">
                    <Link to="/home">
                        <img
                            src="https://i.imgur.com/HoXUpPk.png"
                            alt="Logo"
                            className="w-40 md:w-50"
                        />
                    </Link>

                    <div className="relative flex items-center justify-center w-2/5 text-black max-md:hidden">
                        <SearchForm />
                    </div>

                    <div className="items-center hidden gap-4 py-4 md:flex">
                        <Link to="/produtos" className="hover:underline">
                            Produtos
                        </Link>
                        <Link to="/categorias" className="hover:underline">
                            Categorias
                        </Link>
                        <Link to="/cadastrarcategoria" className="hover:underline">
                            Cadastrar Categoria
                        </Link>
                        <UserIcon size={32} weight="bold" />
                        <ShoppingCartIcon size={32} weight="bold" />
                    </div>

                    <button
                        type="button"
                        className="p-2 text-white md:hidden"
                        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        {isMenuOpen ? <XIcon size={28} /> : <ListIcon size={28} />}
                    </button>
                </div>
            </div>

            <div
                className={`${isMenuOpen ? "flex" : "hidden"} md:hidden flex-col gap-3 w-full bg-indigo-900 text-white px-6 py-4 border-t border-slate-700`}
            >
                <div className="text-black">
                    <SearchForm />
                </div>
                <Link to="/produtos" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                    Produtos
                </Link>
                <Link to="/categorias" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                    Categorias
                </Link>
                <Link to="/cadastrarcategoria" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                    Cadastrar Categoria
                </Link>
                
                    <span className="relative flex items-center">
                        <ShoppingCartIcon size={24} weight="bold" />
                    </span>
                    <span className="relative flex items-center">
                        <UserIcon size={24} weight="bold" />
                    </span>
            </div>
        </>
    )
}

export default Navbar