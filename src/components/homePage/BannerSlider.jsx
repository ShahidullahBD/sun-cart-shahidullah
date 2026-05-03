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
            name: "UV Protection Sunglasses",
            desc: "Up to 50% Off New Arrivals",
            image: "https://static.vecteezy.com/system/resources/thumbnails/034/071/768/small/sunglasses-on-a-beach-ai-generated-photo.jpg",
        },
        {
            id: 2,
            title: "Hote Sale in Summer",
            name: "Cotton Beach T-Shirt",
            desc: "Up to 25% Off New Arrivals",
            image: "https://thumbs.dreamstime.com/b/summer-tshirt-design-vibes-poster-vector-graphics-t-shirt-vintage-beach-typography-retro-designs-holiday-vacation-svg-280154656.jpg",
        },
        {
            id: 3,
            title: "Summer Offer: Buy One Get One",
            name: "SPF 50 Sunscreen Lotion",
            desc: "Keeps skin moisturized without greasy residue",
            image: "https://cdn.vectorstock.com/i/1000v/56/17/summer-sunscreen-product-display-vector-35405617.jpg",
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
                                        <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold mb-4 py-2'>
                                            {banner.title}
                                        </h1>
                                        <h2 className='text-sm md:text-2xl lg:text-5xl font-bold py-3 border rounded-2xl text-white my-2 md:my-5 lg:my-10'>{banner.name}</h2>
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