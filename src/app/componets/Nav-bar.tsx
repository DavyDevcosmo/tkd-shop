"use client"

import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { encode } from "punycode";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FilterByTypes } from "./Filter-by-type";
import CartProducts from "./cart/Cart-products";


export default function NavBar() {
    const [query, setQuery] = useState("");
    const router = useRouter();
    const [showCartModal, setShowCartModal] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        router.push(`/search?query=${encode(query)}`);
    };

    return (
        <header>
            <section className="flex items-center justify-between w-full px-4 py-8 bg-white shadow-sm mb-4">
                <div className="flex-1 max-w-md">
                    <form action="/" method="get" className="w-80">
                        <div className="relative">
                            <input
                                name='q'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="O que você está buscando?"
                                className="w-full pr-10 pl-4 py-2 placeholder-font-Poppins text-font-Poppins placeholder-primary border border-[#D9D9D9] rounded-lg focus:outline-none"
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
                                <FaRegUser className="w-5 h-5" />
                                <span className="text-sm font-Poppins text-primary">Minha Conta</span>
                            </a>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="flex items-center gap-2 mr-6 cursor-pointer"
                                onClick={() => setShowCartModal(true)}
                            >
                                <AiOutlineShoppingCart className="w-6 h-6" />
                                Carrinho
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
            {showCartModal && (
                <>
                    <CartProducts
                        onClose={() => setShowCartModal(false)}
                        products={[]} // TODO: Replace [] with the actual products array from your state or props
                    />
                </>
            )}

            <FilterByTypes />
        </header>
    );
}