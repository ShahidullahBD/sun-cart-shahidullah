import React from 'react';

const PrivacyPolicyPage = () => {
    return (
        <div className='space-y-3 max-w-3xl mx-auto'>
            <h2 className='text-2xl font-bold my-2'>Privecy Policy</h2>
            <div className='space-y-1'>
                <h3 className='text-xl font-bold'>Privacy Policy for ShopNest</h3>
                <p>At ShopNest, we value your privacy. We collect customer information such as name, email, phone number, and shipping address only for order processing and customer support.</p>
            </div>
            <div className='space-y-1'>
                <h3 className='text-xl font-bold'>Information We Collect:</h3>
                <ul>
                    <li>Personal details (Name, Email, Phone)</li>
                    <li>Shipping & Billing Address</li>
                    <li>Payment Information (secured)</li>
                    <li>Browsing activity for better user experience</li>
                </ul>
            </div>
            <div className='space-y-1'>
                <h3 className='text-xl font-bold'>How We Use Your Data:</h3>
                <ul>
                    <li>Process orders</li>
                    <li>Improve website experience</li>
                    <li>Send promotions (optional)</li>
                    <li>Customer support</li>
                </ul>
            </div>
            <div className='space-y-1'>
                <h3 className='text-xl font-bold'>Data Protection:</h3>
                <p>We use secure encryption and do not sell your personal data to third parties.</p>
            </div>
            <div className='space-y-1'>
                <h3 className='text-xl font-bold'>Cookies:</h3>
                <p>We use cookies to improve browsing experience and save cart data.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;