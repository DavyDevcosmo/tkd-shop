"use client"
import Image from "next/image"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { ProductListProps } from "../types/type-product";
import { useCart } from "./cart/Cart-products";
import { toast } from "react-toastify"; // importar toast
import { addListener } from "process";


export default function ProductList({ products }: ProductListProps) {
    const { addItem, items } = useCart(); // pega o método para adicionar ao carrinho

    const handleAddToCart = (product: ProductListProps["products"][0]) => {
        const alreadyInCart = items.find(item => item.id === product.id);
        if (alreadyInCart) return;
        try {
            addItem({
                ...product,
                quantity: 1
            });

            // Usando toastId para não duplicar o toast por produto
            toast.success(`${product.name} adicionado ao carrinho!`, {
                toastId: `add-cart-${product.id}`
            });

        } catch (err) {
            toast.error(`Erro ao adicionar ${product.name} ao carrinho.`, {
                toastId: `add-cart-error-${product.id}`
            });
        }
    };


    console.log("products recebidos:", products);
    return (
        <div className="container mx-auto px-4">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center ">
                {products.map(product => (
                    <article key={product.id} className="flex flex-col items-center h-96 w-72 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="relative w-full h-3/5">
                            <Image

                                src={product.images[0]?.url || "/default-image.jpg"}
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                priority
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        <div className="flex flex-1 flex-col mt-4 justify-end w-full ml-4">
                            <ul className="flex self-start">
                                <li className="text-primary font-Montserrat font-bold mr-1 ">
                                    {product?.price ? product.price.toFixed(2) : "--"}
                                </li>
                                <li className="text-gray-400 font-Montserrat">
                                    {product?.price ? product.price.toFixed(2) : "--"}
                                </li>
                            </ul>
                            <h3 className="text-lg font-Montserrat text-primary font-medium">  {product.name} - {product.category.name}</h3>
                        </div>
                        <div className="flex items-center justify-between w-full pb-0 mt-4">
                            <button className="bg-primary py-3 px-16 ml-2 mb-2 text-white font-semibold font-Poppins cursor-pointer">Comprar</button>
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="flex flex-1 justify-center items-center mr-4"
                                aria-label={`Adicionar ${product.name} ao carrinho`}
                            >
                                <AiOutlineShoppingCart className="w-8 h-8 cursor-pointer" />
                            </button>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    )
}