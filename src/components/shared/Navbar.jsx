import Link from "next/link";


const Navbar = () => {

    const nevItemStyle = 'text-white text-[18px]';

    const nevItems = <>
        <Link href={'/'}><li className={`${nevItemStyle}`}>Home</li></Link>
        <Link href={'/products'}><li className={`${nevItemStyle}`}>Products</li></Link>
        <Link href={'/profile'}><li className={`${nevItemStyle}`}>My Profile</li></Link>
    </>;

    return (
        <div className="navbar bg-orange-500 shadow-sm mb-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-orange-500 rounded-box z-1 mt-4 w-52 p-2 shadow space-y-2">
                        {nevItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-lg sm:text-xl text-white">SunCart</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {nevItems}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <Link href={'/login'}>
                    <button className="btn text-orange-800 text-[18px]">Login</button>
                </Link>
                <Link href={'/register'}>
                    <button className="btn text-orange-800 text-[18px]">Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;