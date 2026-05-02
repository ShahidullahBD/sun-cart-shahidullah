import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCart = ({ product }) => {
    // console.log(product);
    const { name, brand, price, rating, stock, description, image, category } = product;
    return (
        <div className='card'>
            <div>
                <Image src={image} alt={name} height={300} width={300}
                    className='w-full h-75'
                ></Image>
            </div>
            <h2 className='text-xl font-bold hover:text-orange-500'>{name}</h2>
            <p>$ {price.toFixed(2)}</p>
            <div className='flex justify-between items-center'>
                <p className='font-bold'>Brand: {brand}</p>
                <p className='font-bold'>Rating: {rating}</p>
            </div>
            <div className='flex justify-center'>
                <Link href={'/'}>
                    <button className='btn bg-orange-500 text-white font-bold'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCart;