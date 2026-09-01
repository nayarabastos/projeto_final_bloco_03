import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()

    return (
        <footer className="flex justify-center bg-indigo-900 text-white">
            <div className="container flex flex-col items-center gap-2 px-4 py-5 text-center sm:gap-3 sm:py-6">
                <p className='text-base font-bold sm:text-xl'>
                    Farmácia Generation | Copyright: {data}
                </p>
                <p className='text-sm sm:text-lg'>Acesse nossas redes sociais</p>
                <div className='flex gap-3'>
                    <LinkedinLogo size={28} weight='bold' className="sm:size-[35px]" />
                    <InstagramLogo size={28} weight='bold' className="sm:size-[35px]" />
                    <FacebookLogo size={28} weight='bold' className="sm:size-[35px]" />
                </div>
            </div>
        </footer>

    )
}

export default Footer