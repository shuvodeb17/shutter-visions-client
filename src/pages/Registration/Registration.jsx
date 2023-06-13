import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/login/login-img.png';
import GoogleLogin from '../../components/GoogleLogin/GoogleLogin';
import { AuthContext } from '../../providers/AuthProvider';

const Registration = () => {

    const { signUp, userProfileUpdate } = useContext(AuthContext)
    console.log(userProfileUpdate)
    const [error, setError] = useState('');
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        if (data.password !== data.confirmPassword) {
            setError('Password does not match');
            return
        }

        signUp(data.email, data.password)
            .then(result => {
                const createdUser = result.user;

                userProfileUpdate(data.name, data.photoUrl)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email, photo: data.photoUrl, role:'student' }
                        fetch(`http://localhost:5000/users`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                navigate(from, { replace: true });
                            })

                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 h-screen'>
            <div className='text-center flex items-center justify-center flex-col login-left px-3 md:px-16 '>
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
                        <input className='w-full p-3 rounded mb' {...register("name", { required: true })} />
                        {errors.name && <span className='text-red-600'>Name field is required</span>}


                        <p className='mb-2'>Email</p>
                        <input type='email' className='w-full p-3 rounded' {...register("email", { required: true })} />
                        {errors.email && <span className='text-red-600'>Email field is required</span>}


                        <p className=''>Password</p>
                        <input type='password' className='w-full p-3 rounded' {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/ })} />

                        {errors.password?.type == 'required' && <span className='text-red-600'>Password Field is required</span>}
                        {errors.password?.type == 'minLength' && <span className='text-red-600'>Min length 6.</span>}
                        {errors.password?.type == 'maxLength' && <span className='text-red-600'>Max length 20</span>}
                        {errors.password?.type == 'pattern' && <span className='text-red-600'>At least one uppercase letter And One Special Character</span>}

                        <p className=''>Confirm Password</p>
                        <input type='password' className='w-full p-3 rounded' {...register("confirmPassword", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/ })} />
                        {errors.password?.type == 'required' && <span className='text-red-600'>Confirm Password Field is required</span>}
                        {errors.confirmPassword?.type == 'minLength' && <span className='text-red-600'>Min length 6.</span>}
                        {errors.confirmPassword?.type == 'maxLength' && <span className='text-red-600'>Max length 20</span>}
                        {errors.password?.type == 'pattern' && <span className='text-red-600'>At least one uppercase letter And One Special Character</span>}

                        <p className='mb-2'>PhotoURL</p>
                        <input type='url' className='w-full p-3 rounded' {...register("photoUrl", { required: true })} />
                        {errors.photoUrl && <span className='text-red-600'>Please enter your photo url</span>}


                        <br />
                        <p className="text-center text-red-600">{error}</p>

                        <input className='w-full p-3 rounded cursor-pointer bg-[#fc2036b8] text-white font-bold border-0 mt-5' type="submit" value='Sign Up' />

                    </form>
                    <div className='mt-5 text-center mb-5'>
                        <p>Already have an Account ? <Link to='/login' className='text-[#FD5E6E]'>Login Account</Link> </p>
                    </div>
                    <GoogleLogin />

                </div>
            </div>
        </div>
    );
};

export default Registration;