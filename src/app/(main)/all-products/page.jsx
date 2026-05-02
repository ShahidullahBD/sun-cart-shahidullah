import ProductCart from '@/components/shared/ProductCart';
import React from 'react';

const AllProducts = async () => {

    const res = await fetch('https://sun-cart-shahidullah.vercel.app/data.json')
    const products = await res.json();
    // console.log(products);

    return (
        <div className="grid grid-cols-3 gap-5">

            {
                products.map((product) => {
                    return <ProductCart key={product.id} product={product}></ProductCart>
                })
            }
        </div>
    );
};

export default AllProducts;