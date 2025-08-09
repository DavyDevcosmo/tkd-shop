"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import ButtonCart from "./button-cart";

 type CartNotFoundProsps = {
    onClose: () => void;
}

export default function CartNotFound({ onClose }: CartNotFoundProsps) {

    return (
        <>
            <div className="fixed inset-0 bg-black/60 flex items-center justify-end z-50">
                <div className="bg-white h-full w-1/3 p-8 rounded shadow-lg relative flex justify-center items-center flex-col">
                    <ButtonCart onClose={onClose} />
                    <AiOutlineShoppingCart className="w-20 h-20 opacity-55" />
                    <h2 className="font-bold mb-2 text-[#696969] text-xl">Seu carrinho está vazio!</h2>
                    <p className=" font-light text-lg text-[#787878] text-center pb-12">Seu carrinho ainda está em guarda... adicione um golpe certeiro com nossos produtos!</p>
                    <button
                        className="bg-primary hover:bg-[#45517B] text-white py-3 w-72  rounded"
                        onClick={onClose}
                    >
                        Ver produtos
                    </button>
                </div>
            </div>
        </>
    );
}