import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import type { Product } from "@prisma/client";

// Recebe o produto via props
export default function ProductCard({ product }: { product: Product }) {
    // Garante que product existe e images é sempre um array
    const images = Array.isArray(product?.images) ? product.images : [];

    return (
        <article className="flex flex-col items-center h-80 w-60 px-2 mt-30 ml-96 mb-60 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-48">
                <Image
                    src={images.length > 0 ? images[0] : "/placeholder.jpg"}
                    alt={product?.name ?? "Produto"}
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
                <h3 className="text-lg font-Montserrat text-primary font-medium">
                    {product?.name ?? "Produto"}
                </h3>
            </div>

            <div className="flex items-center justify-between w-full mt-2">
                <button className="bg-primary py-3 px-12 text-white font-semibold font-Poppins cursor-pointer">Comprar</button>
                <a href="#" className="flex items-center mr-4">
                    <AiOutlineShoppingCart className="w-6 h-6" />
                </a>
            </div>
        </article>
    )
}