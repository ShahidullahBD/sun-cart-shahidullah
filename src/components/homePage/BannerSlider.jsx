'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const BannerSlider = () => {

    const banners = [
        {
            id: 1,
            title: "Summer Collection 2026",
            desc: "Up to 50% Off New Arrivals",
            image:
                "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
        },
        {
            id: 2,
            title: "Electronics Sale",
            desc: "Latest Gadgets Available",
            image:
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        },
        {
            id: 3,
            title: "Fashion Trends",
            desc: "Premium Style For You",
            image:
                "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
        },
    ];

    return (
        <div className='h-[70vh] w-full'>
            <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{clickable: true}}
            autoplay={{delay:3000}}
            loop={true}
            className='h-62.5 md:h-112.5'
            >
                {
                    banners.map((banner) =>
                        <SwiperSlide key={banner.id}>
                            <div className='h-full bg-cover bg-center flex items-center text-center'
                                style={{backgroundImage: `url(${banner.image})`}}>
                                <div className='bg-black/50 w-full h-full flex items-center py-2'>
                                    <div className='max-w-7xl mx-auto px-6 text-white space-y-5'>
                                        <h1 className='text-3xl md:text-6xl lg:text-7xl font-bold mb-4'>
                                            {banner.title}
                                        </h1>
                                        <p className='text-lg md:text-2xl md-6'>
                                            {banner.desc}
                                        </p>
                                        <button className='bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold mt-15 md:mt-20'>
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default BannerSlider;