import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className="max-w-sm mx-auto my-10">
            <h2 className='text-center text-3xl font-bold text-orange-500'>Loging Now</h2>
            <div className="">                
                <div className="bg-base-100 w-full shadow-xl">
                    <div className="card-body p-10">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <Link href={'/'}><p>Do not have account? <span className='text-red-500 hover:border-b-2 border-b-red-500 font-bold'>register</span></p></Link>
                            <button className="btn bg-orange-500 text-white mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;