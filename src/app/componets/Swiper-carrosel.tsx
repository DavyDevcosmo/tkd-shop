"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";


export default function SwiperCarousel() {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            observer={true}
            observeParents={true}
            className="h-full w-full rounded-2xl"
        >
            <SwiperSlide>
                <div className="relative w-full h-full rounded-2xl">
                    <Image
                        src="https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/cadastro2.png"
                        alt="Slide 1"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-2xl"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-full rounded-2xl">
                    <Image
                        src="/img/tkd-cadastro.png"
                        alt="Slide 2"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-2xl"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-full rounded-2xl">
                    <Image
                        src="https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/taekwondo-combate.webp"
                        alt="Slide 3"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-2xl"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
