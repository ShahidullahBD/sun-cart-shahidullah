'use client'

// import dns from 'node:dns';
// dns.setServers(['8.8.8.8', '8.8.4.4']);

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm();    

    const handleRegisterFunc = async (data) => {


        const { name, photo, email, password } = data;
        console.log({name, photo, email, password});

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            image: photo,
            email: email,
            password: password,
            callbackURL: "/products"
        })

        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("SignUp Successful")
        }
    }

    return (
        <div className="max-w-sm mx-auto my-10">
            <h2 className='text-center text-3xl font-bold text-orange-500'>Register Now</h2>
            <div className="">
                <div className="bg-base-100 w-full shadow-xl">
                    <div className="card-body p-10">
                        <form onSubmit={handleSubmit(handleRegisterFunc)}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" {...register("name")}
                                    className="input" placeholder="Type your name" />
                                <label className="label">Photo</label>
                                <input type="text" {...register("photo")}
                                    className="input" placeholder="Phot URL" />
                                <label className="label">Email</label>
                                <input type="email" {...register("email", {required: "Email is required"})}
                                    className="input" placeholder="Your email" />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                <label className="label">Password</label>
                                <input type="password" {...register("password", {required: "Password is required"})}                                
                                    className="input" placeholder="Password" />
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>} 
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