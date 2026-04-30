import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import ProductsPage from './products/page';

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <ProductsPage/>
            {children}
            <Footer/>
        </div>
    );
};

export default MainLayout;