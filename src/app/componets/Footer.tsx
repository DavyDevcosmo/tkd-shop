import { useFilter } from "../hooks/useFilter";
import { FilterType } from "../types/Filter-types";


import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export function Footer() {

    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value);
        console.log("Novo type:", value);
    }

    return (
        <footer className="w-full h-[70vh] bg-primary flex justify-between px-4 py-8">
            <section className="w-full py-2 mt-12  ">
                <nav className="flex justify-start items-start h-full" aria-label="Filtro de Produtos">



                    <div className="flex justify-start items-start h-full ">
                        <ul className="flex flex-col items-start justify-start gap-4 text-sm font-Poppins text-white pl-56">
                            <li className="text-lg font-medium font-Poppins">Entre em contato</li>
                            <li className="flex items-center gap-2">
                                <FaWhatsapp className="text-white w-7 h-7" />
                                85 4002-8922
                            </li>
                            <li className="flex items-center gap-2">
                                <IoLocationOutline className="text-white  w-7 h-7" />
                                4517 Washington Ave.
                            </li>
                            <li className="flex items-center gap-2">
                                <MdOutlineEmail className="text-white  w-7 h-7" />
                                tkdShoop@gmai.com
                            </li>
                        </ul>
                    </div>

                    <ul className="pl-64 ">
                        <li >
                            <a href="#" className="flex items-center gap-2 mb-4">
                                <span className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                                    <FaFacebookF className="text-primary w-6 h-6" />
                                </span>
                                <span className="text-sm font-Poppins text-white">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2">
                                <span className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                                    <FaInstagram className="text-primary w-6 h-6" />
                                </span>
                                <span className="text-sm font-Poppins text-white">Instagram</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">

                    <h3 className="text-bgSecondary font-poppins font-normal  text-sm">
                        Desenvolvido por Davy Cosmo
                    </h3>

                    <div className="h-6 w-px bg-gray-500  hidden sm:block"></div>
                    <h3 className="text-bgSecondary font-poppins text-sm">
                        Todos os direitos reservados DavyCosmo ©2025
                    </h3>


                </div>


            </section>


        </footer>
    )
}