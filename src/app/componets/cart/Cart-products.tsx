import Image from "next/image";
import ButtonCart from "./button-cart";
import { ProductListProps } from "@/app/types/type-product";
import Counter from "../count/count";
import CartNotFound from "./Cart-not-found";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "@/app/context/cart";
import { FaRegTrashCan } from "react-icons/fa6";
import { calculateTotalPrice, formatPrice } from "@/app/utils";

// Utility function to format price

export const useCart = () => {
    return useContext(CartContext);
};


type CartProductsProps = ProductListProps & {
    onClose: () => void;
};

export default function CartProducts({ products, onClose }: CartProductsProps) {


    const { items, removeItem, changeQuantity, clear } = useCart();



    if (items.length === 0) {
        return <CartNotFound onClose={onClose} />;
    }
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-end z-50">
            {/* Modal lateral */}
            <div className="bg-white h-full w-5/12 flex flex-col">

                {/* Botão de fechar */}
                <div className="sticky top-0 z-10 bg-white mb-18">
                    <ButtonCart onClose={onClose} />
                </div>

                {/* Produtos */}
                {items.map(product => (

                    <div key={product.id} className="p-6 flex items-center gap-6 ">
                        <div className="flex-shrink-0">
                            <Image
                                src={product.images[0]?.url || "/default-image.jpg"}
                                alt={product.name}
                                width={90}
                                height={90}
                                className="object-contain"
                            />
                        </div>

                        <div className="flex-grow">
                            {/* Nome e botão de remover */}
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-medium text-black">{product.name}</p>
                                <FaRegTrashCan
                                    className="h-6 w-6 text-gray-500 hover:text-red-500 transition-colors duration-200 cursor-pointer"
                                    onClick={() => removeItem(product)}
                                />
                            </div>

                            {/* Counter e preço */}
                            <div className="mt-6 flex items-center justify-between">
                                <Counter
                                    initialValue={product.quantity}
                                    onChange={(value) => {
                                        changeQuantity({ ...product, quantity: value });
                                    }}
                                />
                                <span className="text-base font-semibold text-black">
                                    {formatPrice(product.price * product.quantity)}
                                </span>

                            </div>
                        </div>

                    </div>
                ))}

                <div>
                    <div className="flex w-3/4 items-center junstify-center">
                        <input
                            type="text"
                            placeholder="Digite algo..."
                            className="border border-gray-300 rounded-lg p-2 flex-1 h-14"
                        />
                        <button className="bg-black text-white px-4 rounded-lg h-14">
                            Enviar
                        </button>
                    </div>

                </div>


                <div>

                    <div className="font-bold pl-7 border-t border-zinc-300 flex justify-between mb-10 ">
                        <h4 className="text-3xl font-bold mt-10">Total:</h4>
                        <span className="text-3xl font-bold mt-10">{formatPrice(calculateTotalPrice(items))}</span>
                    </div>

                    <div className=" flex justify-center items-center mx-auto flex-col">
                        <button className="bg-black text-white w-3/4 h-14 text-3xl font-normal rounded-full cursor-pointer mb-6">Comprar</button>
                        <span onClick={onClose} className="text-md hover:text-zinc-600 cursor-pointer">ver mais produtos</span>
                    </div>

                </div>
            </div>
        </div>

    )
}