import Image from "next/image";

export function CartItem() {
    return (
        <div>
            <div>
                <Image
                    src="https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/logo-tkd.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="object-contain"
                />
            </div>
            <div>

            </div>
        </div>

    )
}