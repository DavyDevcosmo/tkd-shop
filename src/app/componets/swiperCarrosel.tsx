"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function SwiperCarousel() {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            pagination={{ clickable: true }}

            className="h-full w-full rounded-2xl"
        >
            <SwiperSlide>
                <img
                    src="/img/tkd-cadastro.png"
                    alt="Slide 1"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="/img/tkd34.avif"
                    alt="Slide 2"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="/img/taekwondo-combate.webp"
                    alt="Slide 3"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </SwiperSlide>
        </Swiper>
    );
}
