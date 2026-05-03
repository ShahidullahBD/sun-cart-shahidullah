'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';

const LoginPage = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLoginFunc = async (data) => {
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/products"
        })

        // console.log(error, "error");

        if (error) {
            toast.error("Invalid Email or Password!");
        }
        if (res) {
            toast.success("Login successful!");
        }

    }

    return (
        <div className="max-w-sm mx-auto my-10">
            <h2 className='text-center text-3xl font-bold text-orange-500'>Loging Now</h2>
            <div className="">
                <div className="bg-base-100 w-full shadow-xl">
                    <div className="card-body p-10">
                        <form onSubmit={handleSubmit(handleLoginFunc)}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input {...register("email", { required: "Email is required" })}
                                    type="email" className="input" placeholder="Email" />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                <label className="label">Password</label>
                                <div className='relative'>
                                    <input {...register("password", { required: "Password is required" })}
                                        type={isShowPassword ? "text" : "password"} className="input" placeholder="Password" />
                                    <span className='absolute right-3 top-3 text-lg' onClick={() => setIsShowPassword(!isShowPassword)}>
                                        {isShowPassword ? <IoEye /> : <FaEyeSlash />}
                                    </span>
                                </div>
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <Link href={'/register'}><p>Do not have account? <span className='text-red-500 hover:border-b-2 border-b-red-500 font-bold'>register</span></p></Link>
                                <Link href={'/'}>
                                    <button className="btn bg-orange-500 text-white mt-4">Login</button>
                                </Link>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;