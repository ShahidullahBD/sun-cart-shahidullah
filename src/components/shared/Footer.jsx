import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-orange-500 text-white my-5 p-5 grid grid-cols-2 gap-10 space-y-3'>
            <div className=' space-y-2'>
                <h2 className='text-2xl font-bold'>Contact Us</h2>
                <hr />
                <div className=''>
                    <p className='text-lg'><span className='font-bold'>Store Name: </span>Suc Cart</p>
                    <p className='text-lg'><span className='font-bold'>Customer Support Email: </span>support@shopnest.com</p>
                    <p className='text-lg'><span className='font-bold'>Business Email: </span>info@shopnest.com</p>
                    <p className='text-lg'><span className='font-bold'>Phone: </span>+1 (555) 123-4567</p>
                    <p className='text-lg'><span className='font-bold'>WhatsApp: </span>+1 (555) 987-6543</p>
                    <p className='text-lg'><span className='font-bold'>Address: </span>123 Market Street, New York, NY 10001, USA</p>
                    <p className='text-lg'><span className='font-bold'>Working Hours: </span>Mon - Sat | 9:00 AM - 8:00 PM</p>
                </div>
            </div>
            <div>
                <div className='space-y-2'>
                    <h2 className='text-2xl font-bold'>Social links</h2>
                    <hr />
                    <div className='flex gap-4 my-3'>
                        <Link href={'https://www.facebook.com/shahidullahkorea'}>
                            <button className='btn bg-white text-blue-500 font-bold'>Facebook</button>
                        </Link>
                        <button className='btn bg-white text-orange-500 font-bold'>Instagram</button>
                        <button className='btn bg-white text-black font-bold'>Twitter</button>
                    </div>
                </div>
                <div className='mt-10'>
                    <Link href={'/privecy'}>
                        <button className='text-2xl font-bold hover:cursor-pointer'>Privacy policy
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;