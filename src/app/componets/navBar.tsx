
import Image from "next/image";
import { IoMdContact } from "react-icons/io";
import { useRouter } from "next/navigation";
import { encode } from "punycode";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

function navBar() {


    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        router.push(`/search?query=${encode(query)}`);
    };

    return (
        <header>
            <section className="flex items-center justify-between w-full px-4 py-8 bg-white shadow-sm mb-4">

                <div className="flex-1 max-w-md">
                    <form onSubmit={handleSearch} className="w-80">
                        <div className="relative">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="O que você está buscando?"
                                className="w-full pr-10 pl-4 py-2 placeholder-font-Poppins text-font-Poppins placeholder-primary border border-gray-900 rounded-lg focus:outline-none "
                            />
                            <CiSearch className="absolute right-3 w-8 h-8 top-1/2 transform -translate-y-1/2 text-black text-xl pointer-events-none" />
                        </div>
                    </form>
                </div>


                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Image
                        src="https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/logo-tkd.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>

                <div className="flex-1 flex justify-end">
                    <ul className="flex items-center gap-10">
                        <li>
                            <a href="#" className="flex items-center gap-2">
                                <IoMdContact className="w-8 h-8" />
                                <span className="text-sm font-Poppins text-primary ">Minha Conta</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 mr-6">
                                <AiOutlineShoppingCart className="w-6 h-6" />
                                <span className="text-sm font-Poppins text-primary">Carrinho</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>


            <section className="w-full py-2 bg-white shadow-sm pb-4">
                <nav className="flex justify-center items-center h-full">
                    <ul className="flex items-center justify-center gap-16 text-md font-Poppins text-primary">
                        <li>
                            <a
                                href="#"
                                className="inline-block transition-transform duration-200 ease-in-out hover:scale-110"
                            >
                                Início
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="inline-block transition-transform duration-200 ease-in-out hover:scale-110"
                            >
                                Proteção
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="inline-block transition-transform duration-200 ease-in-out hover:scale-110"
                            >
                                Dobok
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="inline-block transition-transform duration-200 ease-in-out hover:scale-110"
                            >
                                Faixa Taekwondo
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="inline-block transition-transform duration-200 ease-in-out hover:scale-105"
                            >
                                Sobre o taekwondo
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>

        </header>
    )

}; export default navBar;