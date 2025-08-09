import Image from "next/image";
import ButtonCart from "./button-cart";
import { ProductListProps } from "@/app/types/type-product";
import Counter from "../count/count";
import CartNotFound from "./Cart-not-found";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "@/app/context/cart";

// Utility function to format price
function formatPrice(price: number): string {
    return price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}
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

                    <div key={product.id} className="p-6 flex items-center gap-6 border-b border-gray-200">
                        <div className="flex-shrink-0">
                            <Image
                                src={product.images[0]?.url || "/default-image.jpg"}
                                alt={product.name}
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </div>

                        <div className="flex flex-col flex-grow">
                            <p className="text-sm text-black">
                                {product.name}
                            </p>

                            <div className="mt-4 flex items-center justify-between">
                                <Counter initialValue={1} onChange={() => { }} />

                                <span className="text-base font-semibold text-black">
                                    {formatPrice(product.price)}
                                </span>

                                <AiTwotoneCloseCircle className="h-9 w-9 cursor-pointer" onClick={() => removeItem(product)} />
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>

    )
}