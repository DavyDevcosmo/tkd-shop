import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Importa os estilos do FontAwesome
import SwiperCarousel from "../componets/swiperCarrosel";
config.autoAddCss = false;

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main >
            <section className="flex w-screen h-screen bg-white">
                <div
                    className="w-1/2 my-5 ml-5 rounded-2xl bg-blue-800 hidden md:block relative ">

                    <SwiperCarousel />
                </div>

                <div className="flex w-full h-full items-center justify-center md:w-1/2">
                    {children}
                </div>
            </section>
        </main>
    )
}