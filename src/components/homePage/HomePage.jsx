import React from 'react';
import BannerSlider from './BannerSlider';
import ProductsPage from '@/app/(main)/products/page';

const HomePage = () => {
    return (
        <div>
            <BannerSlider/>
            <ProductsPage/>
        </div>
    );
};

export default HomePage;