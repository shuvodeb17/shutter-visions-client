import React from 'react';
import loginImage from '../../assets/images/login/login-img.png';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Registration = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className='grid grid-cols-2 gap-5'>
            <div className='text-center flex items-center justify-center flex-col login-left px-3 md:px-16'>
                <img className='w-[250px]' src={loginImage} alt="" />
                <h1 className='text-3xl font-bold mt-5'>Welcome to ShutterVisions</h1>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, corrupti. Facilis alias natus possimus ab placeat, similique neque error quidem?</p>
            </div>
            <div className='flex justify-center flex-col px-3 md:px-16'>

                <div className='flex justify-between mt-20'>
                    <h1 className='text-2xl font-bold'>Shutter Visions</h1>
                    <Link to='/' className='underline cursor-pointer'>Back to Home</Link>
                </div>
                <h1 className="text-3xl mb-5">Sign up</h1>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className='mb-2 '>Name</p>
                        <input className='w-full p-3 rounded mb-3' {...register("name")} required />

                        <p className='mb-2'>Email</p>
                        <input className='w-full p-3 rounded mb-3' {...register("email", { required: true })} required />

                        <p className=''>Password</p>
                        <input className='w-full p-3 rounded mb-3' {...register("password", { required: true })} required />

                        <p className=''>Confirm Password</p>
                        <input className='w-full p-3 rounded mb-3' {...register("confirmPassword", { required: true })} required />

                        <p className='mb-2'>PhotoURL</p>
                        <input className='w-full p-3 rounded mb-3' {...register("photoUrl", { required: true })} required />

                        <br />
                        <input className='w-full p-3 rounded cursor-pointer bg-[#fc2036b8] text-white font-bold border-0 mt-5' type="submit" value='Sign Up' />
                    </form>
                    <div className='mt-5 text-center mb-5'>
                        <p>Already have an Account ? <Link to='/login' className='text-[#FD5E6E]'>Login Account</Link> </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Registration;