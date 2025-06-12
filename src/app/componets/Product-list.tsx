"use client"
import Image from "next/image"
import { useProducts } from "../hooks/useProducts"
import { AiOutlineShoppingCart } from "react-icons/ai"

export default function ProductList() {
    const { products, loading } = useProducts()

    if (loading) return <p>Carregando...</p>

    return (
        <div className="container mx-auto px-4">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                {products.map(product => (
                    <article key={product.id} className="flex flex-col items-center h-80 w-60 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="relative w-full h-48">
                            <Image
                                src={product.images[0] || "/img/default.jpg"}
                                alt={product.name}
                                fill
                                priority
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        <div className="flex flex-col mt-4 justify-end w-full">
                            <ul className="flex self-start">
                                <li className="text-primary font-Monterrat font-bold mr-1 ">
                                    {product?.price ? product.price.toFixed(2) : "--"}
                                </li>
                                <li className="text-gray-400 font-Monterrat">
                                    {product?.price ? product.price.toFixed(2) : "--"}
                                </li>
                            </ul>
                            <h3 className="text-lg font-Montserrat text-primary font-medium">{product.name}</h3>
                        </div>
                        <div className="flex items-center justify-between w-full mt-2">
                            <button className="bg-primary py-3 px-12 text-white font-semibold font-Poppins cursor-pointer">Comprar</button>
                            <a href="#" className="flex items-center mr-4">
                                <AiOutlineShoppingCart className="w-6 h-6" />
                            </a>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    )
}