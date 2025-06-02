import Image from "next/image";

export default function ProductCard() {
    return (
        <article className="flex flex-col items-center justify-center max-h-96 max-w-72 py-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-72">
                <Image
                    src="/img/protection.jpg"
                    alt="Slide 1"
                    fill
                    priority
                    className="object-cover rounded-2xl"
                />
            </div>

            <div>
                <p>t123.33</p>
                <h3>Dobok</h3>
            </div>
        </article>
    )
}