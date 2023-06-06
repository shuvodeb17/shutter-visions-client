import React from 'react';
import errorImage from '../../assets/images/error/error.png';

const Error = () => {
    return (
        <div>
            <img className='w-6/12 mx-auto' src={errorImage} alt="" />
        </div>
    );
};

export default Error;