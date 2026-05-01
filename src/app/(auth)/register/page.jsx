import { Form } from '@heroui/react';
import React from 'react';

const RegisterPage = () => {
    return (
        <div className="max-w-sm mx-auto my-10">
            <h2 className='text-center text-3xl font-bold text-orange-500'>Register Now</h2>
            <div className="">
                <div className="bg-base-100 w-full shadow-xl">
                    <div className="card-body p-10">
                        <form>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="Type your name" />
                                <label className="label">Photo</label>
                                <input type="text" className="input" placeholder="Phot URL" />
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Your email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />                                
                                <button className="btn bg-orange-500 text-white mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;