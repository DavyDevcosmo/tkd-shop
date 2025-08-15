import Image from "next/image";
import ButtonCart from "./button-cart";
import { ProductListProps } from "@/app/types/type-product";
import Counter from "../count/count";
import CartNotFound from "./Cart-not-found";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/app/context/cart";
import { FaRegTrashCan } from "react-icons/fa6";
import { calculateTotalPrice, formatPrice } from "@/app/utils";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

// Utility function to format price

export const useCart = () => {
    return useContext(CartContext);
};

type CartProductsProps = ProductListProps & {
    onClose: () => void;
};

export default function CartProducts({ products, onClose }: CartProductsProps) {
    const { items, removeItem, changeQuantity, clear } = useCart();

    const [cep, setCep] = useState("");
    const [frete, setFrete] = useState<{ PAC?: number; SEDEX?: number }>({});
    const [prazo, setPrazo] = useState<{ PAC?: string; SEDEX?: string }>({});
    const [loadingFrete, setLoadingFrete] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const calcularFrete = async () => {
        if (!cep) return alert("Digite seu CEP");
        try {
            setLoadingFrete(true);
            const { data } = await axios.get(`/api/frete?cepDestino=${cep}`);
            const servicos = data?.Servicos?.cServico;

            // Pode vir um objeto ou array se consultar dois serviços
            const arrayServicos = Array.isArray(servicos) ? servicos : [servicos];

            const novoFrete: any = {};
            const novoPrazo: any = {};

            arrayServicos.forEach((s: any) => {
                if (s.Codigo === "04510") {
                    novoFrete.PAC = parseFloat(s.Valor.replace(",", "."));
                    novoPrazo.PAC = s.PrazoEntrega;
                }
                if (s.Codigo === "04014") {
                    novoFrete.SEDEX = parseFloat(s.Valor.replace(",", "."));
                    novoPrazo.SEDEX = s.PrazoEntrega;
                }
            });

            setFrete(novoFrete);
            setPrazo(novoPrazo);
        } catch (err) {
            console.error("Erro ao calcular frete", err);
            alert("Erro ao calcular frete");
        } finally {
            setLoadingFrete(false);
        }
    };

    if (items.length === 0) {
        return <CartNotFound onClose={onClose} />;
    }
    const totalProdutos = calculateTotalPrice(items);
    const totalComFrete = totalProdutos + (frete.PAC ?? 0);

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-end z-50">
            {/* Modal lateral */}
            <div className="bg-white h-full w-5/12 flex flex-col overflow-y-auto relative">

                {/* Botão de fechar */}
                <div className="sticky top-0 z-10 bg-white mb-18">
                    <ButtonCart onClose={onClose} />
                </div>

                {/* Produtos */}
                <div className="flex-1">
                    {items.map(product => (

                        <div key={product.id} className="p-6 flex items-center gap-6">
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

                                    <ToastContainer
                                        position="top-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick={false}
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="light"
                                        transition={Bounce}
                                    />

                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                {/* CEP e frete */}
                <div>
                    <div className="flex flex-col border-t border-zinc-300 mb-5">

                        <p className="text-md text-zinc-600 ml-5 mt-5">Meios de envio</p>
                        <div className="flex w-11/12 items-center justify-center mx-auto py-2.5">
                            <input
                                type="text"
                                placeholder="Digite seu CEP"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2 flex-1 h-14 rounded-r-none"
                            />
                            <button className="bg-black text-white px-4  h-14 rounded-r-lg rounded-l-none cursor-pointer"
                                onClick={calcularFrete}
                                disabled={loadingFrete}>
                                {loadingFrete ? "Calculando Frete" : "Enviar"}
                            </button>
                        </div>
                        {frete.PAC && (
                            <div className="ml-5 mt-2 text-sm text-zinc-700">
                                <p>PAC: R${frete.PAC} - {prazo.PAC} dias</p>
                                {frete.SEDEX && <p>SEDEX: R${frete.SEDEX} - {prazo.SEDEX} dias</p>}
                            </div>
                        )}
                        <p className="text-md text-zinc-600 ml-5">Não sei meu CEP</p>
                    </div>

                </div>


                <div>

                    <div className="font-bold pl-7 border-t border-zinc-300 flex justify-between mb-5 ">
                        <h4 className="text-3xl font-bold mt-5">Total:</h4>
                        <span className="text-3xl font-bold mt-5">{formatPrice(calculateTotalPrice(items))}</span>
                    </div>

                    <div className=" flex justify-center items-center mx-auto flex-col">
                        <button className="bg-black text-white w-3/4 h-10 text-2xl font-normal rounded-full cursor-pointer mb-5">Comprar</button>
                        <p onClick={onClose} className="text-md hover:text-zinc-600 cursor-pointer mb-10">ver mais produtos</p>
                    </div>

                </div>
            </div>
        </div>

    )
}