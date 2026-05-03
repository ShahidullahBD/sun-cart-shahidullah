'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';

const RegisterPage = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleRegisterFunc = async (data) => {


        const { name, photo, email, password } = data;
        console.log({ name, photo, email, password });

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            image: photo,
            email: email,
            password: password,
            callbackURL: "/login"
        })
        console.log(error, 'err');

        if (error) {
            alert(error.message)
        }
        if (res) {
            toast.success("Register successful!");
            redirect('/login')
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
                                <input type="email" {...register("email", { required: "Email is required" })}
                                    className="input" placeholder="Your email" />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                <label className="label">Password</label>
                                <div className='relative'>
                                    <input type={isShowPassword ? "text" : "password"} {...register("password", { required: "Password is required" })}
                                        className="input" placeholder="Password" />
                                    <span className='absolute right-3 top-3 text-lg' onClick={() => setIsShowPassword(!isShowPassword)}>
                                        {isShowPassword ? <IoEye /> : <FaEyeSlash />}
                                    </span>
                                </div>
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