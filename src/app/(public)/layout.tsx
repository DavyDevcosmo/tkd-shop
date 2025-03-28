import Image from "next/image";
import Register from "./register/page";



export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main >
            <section className="flex  w-screen h-screen bg-white">
                <div
                    className="w-1/2 my-5 ml-5 rounded-2xl bg-blue-800 hidden md:block relative ">

                    <Image
                        src="/img/tkd-cadastro.png" // Substitua pelo caminho da sua imagem
                        alt="Descrição da imagem"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl object-cover"
                    />
                </div>

                <div className="flex w-full h-full items-center justify-center md:w-1/2">

                    <Register />
                </div>
            </section>
        </main>
    )
}