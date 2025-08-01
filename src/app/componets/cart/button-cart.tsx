import { AiTwotoneCloseCircle } from "react-icons/ai";
import { CartNotFoundProsps } from "./Cart-not-found";

export default function ButtonCart({ onClose }: CartNotFoundProsps) {
    return (
        <button className="absolute top-0 left-0 w-full h-20 bg-[#000] px-4 py-2 text-[#FFF] flex items-center justify-between cursor-pointer hover:bg-[#393939]"
            onClick={onClose}>
            <span>Carrinho de compras</span>
            <AiTwotoneCloseCircle className="h-9 w-9" />
        </button>
    )
}