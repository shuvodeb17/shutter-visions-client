import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const GoogleLogin = () => {

    const { googleSignIn } = useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const googleSignInHandler = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div onClick={googleSignInHandler} className='w-3/5 mx-auto text-center shadow-md flex items-center justify-center mt-5 py-3 cursor-pointer'>
            <FcGoogle size={24} />
            <span className="ms-5">
                Sign in with Google
            </span>
        </div>
    );
};

export default GoogleLogin;