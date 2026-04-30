import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import HomePage from '@/components/homePage/HomePage';

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <HomePage/>            
            {children}
            <Footer/>
        </div>
    );
};

export default MainLayout;