import Navbar from '@/components/shared/Navbar';
import React from 'react';
import PrivacyPolicyPage from './privecy/page';

const PrivecyLayout = () => {
    return (
        <div>
            <Navbar/>
            <PrivacyPolicyPage/>            
        </div>
    );
};

export default PrivecyLayout;