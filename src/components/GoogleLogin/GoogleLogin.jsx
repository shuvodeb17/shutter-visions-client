import React from 'react';
import { FcGoogle } from 'react-icons/fc';


const GoogleLogin = () => {
    return (
        <div className='w-3/5 mx-auto text-center shadow-md flex items-center justify-center mt-5 py-3 cursor-pointer'>
            <FcGoogle size={24} />
            <span className="ms-5">
                Sign in with Google
            </span>
        </div>
    );
};

export default GoogleLogin;