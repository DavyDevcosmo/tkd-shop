import Image from "next/image"

export function BannerMain() {
    return (
        <div className="relative w-full h-[60vh] md:mt-5 mb-8">
            <Image
                src="https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/dobok.jpg"
                alt="Slide 3"
                fill
                className="object-cover "
            />
        </div>

    )
}