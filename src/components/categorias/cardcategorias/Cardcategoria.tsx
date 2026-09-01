import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { PencilIcon, TrashIcon } from "@phosphor-icons/react";

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-900 text-white font-bold text-2xl'>Categoria</header>
            <p className='p-8 text-3xl bg-white h-full'>{categoria.nome}</p>
            <div className="flex">
                <Link
                    to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-indigo-900 
                        flex items-center justify-end px-2 py-2'>
                    <PencilIcon size={20} />
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}
                    className='text-slate-100 bg-indigo-900 w-full 
                        flex items-center px-2 py-2'>
                    <TrashIcon size={20} />
                </Link>
            </div>
        </div>
    );
}

export default CardCategoria;