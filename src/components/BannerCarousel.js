import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

const BannerCarousel = () => {
    const images = [
        '/images/banner1.jpg',
        '/images/banner2.jpg',
        '/images/banner3.jpg',
    ];

    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <img src={src} alt={`Banner ${index + 1}`} className="w-full h-auto" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BannerCarousel;