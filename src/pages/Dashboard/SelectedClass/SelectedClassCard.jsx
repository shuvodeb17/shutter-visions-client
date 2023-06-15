import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const SelectedClassCard = ({ select, index, paymentHandler, deleteHandler }) => {
    console.log(select)

    const { user } = useContext(AuthContext);
    const [isRole, setIsRole] = useState('');
    console.log(isRole)
    useEffect(() => {
        fetch(`https://shutter-vission-server.vercel.app/specific-user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsRole(data[0].role)
            })
    }, [user])

    return (

        <>
            <motion.tr 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 60 },
                opacity: { duration: 1 },
                ease: 'easeIn',
                duration: 1
            }}
            className={`${select?.seats === 0 ? 'bg-red-300' : ''}`}>
                <th>
                    {index + 1}
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={select?.courseImage} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {select?.courseName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{select?.instructorName}</span>
                </td>
                <td>Seats: {select?.seats}</td>
                <td>Enrolled: {select?.enrolled}</td>
                <td>Price: {select?.price}</td>
                <td>
                    <Link to='/dashboard/payment' state={select}>
                        <button disabled={select.seats == 0 || isRole == 'admin' || isRole == 'instructor'} onClick={() => paymentHandler(allClass)} className={`${'w-full p-3 rounded cursor-pointer bg-[#fc2036b8] text-white font-bold border-0'}`}>Pay</button>
                    </Link>
                </td>
                <th>
                    <button onClick={() => deleteHandler(select)} className="btn btn-ghost btn-xs">Delete</button>
                </th>
            </motion.tr>
        </>
    );
};

export default SelectedClassCard;