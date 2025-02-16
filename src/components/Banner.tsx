// src/components/Banner.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Banner = () => {
    const images = [
        "https://theme.hstatic.net/200000886699/1001255494/14/slide_1_img.jpg?v=141",
        "https://theme.hstatic.net/200000886699/1001255494/14/slide_2_img.jpg?v=141",
        "https://theme.hstatic.net/200000886699/1001255494/14/slide_3_img.jpg?v=141",
    ];

    return (
        <Swiper navigation={true} modules={[Navigation]} className="w-full">
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={src}
                        alt={`Banner ${index + 1}`}
                        className="w-full h-auto object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
