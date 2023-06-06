import React from 'react';
import loginImage from '../../assets/images/login/login-img.png';
import './Login.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import GoogleLogin from '../../components/GoogleLogin/GoogleLogin';


const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 h-screen'>
            <div className='text-center flex items-center justify-center flex-col login-left px-3 md:px-16'>
                <img className='w-[250px]' src={loginImage} alt="" />
                <h1 className='text-3xl font-bold mt-5'>Welcome to ShutterVisions</h1>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, corrupti. Facilis alias natus possimus ab placeat, similique neque error quidem?</p>
            </div>
            <div className='flex justify-center flex-col px-3 md:px-16'>

                <div className='flex justify-between mb-5'>
                    <h1 className='text-2xl font-bold'>Shutter Visions</h1>
                    <Link to='/' className='underline cursor-pointer'>Back to Home</Link>
                </div>
                <h1 className="text-3xl mb-5">Login to your account</h1>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className='mb-2 mt-5'>Username or Email Address</p>
                        <input className='w-full p-3 rounded' {...register("email")} />

                        <p className='mb-2 mt-5'>Password</p>
                        <input className='w-full p-3 rounded mb-11' {...register("password", { required: true })} />

                        <br />
                        <input className='w-full p-3 rounded cursor-pointer bg-[#fc2036b8] text-white font-bold border-0' type="submit" value='Login' />
                    </form>
                    <div className='mt-5 text-center'>
                        <p>New User ? <Link to='/registration' className='text-[#FD5E6E]'>Create a New Account</Link> </p>

                        <GoogleLogin />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;