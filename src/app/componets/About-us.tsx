import Image from "next/image";

export function AboutUsSection() {
    return (
        <section className="bg-bgSecondary w-full min-h-screen flex items-center justify-center py-16">

            <div className="flex w-11/12 max-w-7xl items-center justify-between gap-8">

                <div className="flex flex-1 gap-4 h-[60vh] relative">

                    <div className="relative w-1/3 h-full">
                        <Image
                            src="https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/AboutUsSection1.jpg"
                            alt="Slide 3"
                            fill
                            className="object-contain "
                        />
                    </div>


                    <div className="relative w-1/2 h-full">
                        <Image
                            src="https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/AboutUsSection2.jpg"
                            alt="Slide 3"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="flex-1">
                    <h1 className="font-bold text-4xl font-Montserrat text-primary mb-6">
                        Equipando Sua Vitória no Taekwondo.
                    </h1>
                    <p className="font-normal text-lg font-Montserrat text-tertiary mb-3">
                        Na TKDshoop, nosso propósito é impulsionar cada movimento seu no tatame. Acreditamos que o dobok e os equipamentos certos são extensões do seu espírito de luta, ferramentas que elevam sua performance ao máximo.Desenvolvemos cada item com a qualidade e o cuidado que um atleta de Taekwondo de verdade merece. Conte conosco para equipar sua jornada rumo à excelência. Sua vitória é a nossa maior conquista.
                    </p>
                    <p className="font-normal text-lg font-Montserrat text-tertiary">
                        Desenvolvemos cada item com a qualidade e o cuidado que um atleta de Taekwondo de verdade merece. Conte conosco para equipar sua jornada rumo à excelência. Sua vitória é a nossa maior conquista.
                    </p>
                </div>
            </div>

        </section >
    )
}