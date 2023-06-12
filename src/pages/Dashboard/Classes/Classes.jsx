import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import ClassesCard from './ClassesCard';

const Classes = () => {

    const { user } = useContext(AuthContext)
    const [enroll, setEnroll] = useState([])

    useEffect(() => {
        fetch(`https://shutter-vission-server.vercel.app/payments-details-specific?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setEnroll(data))
    }, [])

    return (
        <div className='px-3 md:px-16'>
            <h1 className='py-3 text-center text-3xl'>My Course</h1>
            <h2 className='py-3 text-2xl'>
                Welcome Back <span className='font-bold text-green-600'>{user?.displayName}</span>
            </h2>
            {
                enroll?.map(item => <ClassesCard
                    key={item?._id}
                    item={item}
                />)
            }
        </div>
    );
};

export default Classes;