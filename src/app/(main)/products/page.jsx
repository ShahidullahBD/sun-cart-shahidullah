import BannerSlider from "@/components/homePage/BannerSlider";
import ProductCart from "@/components/shared/ProductCart";
import Link from "next/link";



const ProductsPage = async () => {

    const res = await fetch('https://sun-cart-shahidullah.vercel.app/data.json')
    const products = await res.json();
    // console.log(products);


    return (
        <div>
            <BannerSlider />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-2">

                {
                    products.slice(0, 3).map((product) => {
                        return <ProductCart key={product.id} product={product}></ProductCart>
                    })
                }
            </div>
            <div className="flex justify-center my-10">
                <Link href={'/all-products'}>
                    <button className="btn py-6 mb-10 px-10 bg-orange-500 text-white text-xl font-bold">View All Products</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductsPage;