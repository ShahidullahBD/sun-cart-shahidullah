import { number } from 'better-auth';
import Image from 'next/image';
import React from 'react';


const ProductDetails = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const res = await fetch('https://sun-cart-shahidullah.vercel.app/data.json')
    const products = await res.json();
    // console.log(products);

    const singleProduct = products.find(
        (item) => item.id === Number(id)
    );

    // console.log(singleProduct);

    const { name, brand, price, rating, description, image, category } = singleProduct;

    return (
        <div className=''>
            <div>
                <Image src={image} alt={name} height={300} width={300}
                    className='w-200 h-fit mx-auto rounded-2xl'
                ></Image>
            </div>
            <div className='lg:w-200 w-fit mx-auto border shadow rounded-2xl my-2 p-5 space-y-4 border-orange-500'>
                <h2 className='text-xl font-bold hover:text-orange-500'>{name}</h2>
                <p>{description}</p>
                <p className='hover:animate-pulse cursor-pointer text-2xl font-bold text-green-600'>$ {price.toFixed(2)}</p>
                <p><span className='font-bold'>Product Category:</span> {category}</p>
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>Brand: {brand}</p>
                    <p className='font-bold'>Rating: {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;