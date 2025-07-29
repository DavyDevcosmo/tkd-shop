"use client";


export default function CartNotFound() {

    return (
        <>

            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-end z-50">
                <div className="bg-white h-full w-1/2 p-8 justify-start rounded shadow-lg relative">

                    <h2 className="text-lg font-bold mb-2">Seu carrinho está vazio!</h2>
                    <p>Seu carrinho ainda está em guarda... adicione um golpe certeiro com nossos produtos!</p>
                    <button
                        className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded"

                    >
                        Ver produtos
                    </button>
                </div>
            </div>
        </>
    );
}