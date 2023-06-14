import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
import SelectedClassCard from './SelectedClassCard';

const SelectedClass = () => {

    const { user } = useContext(AuthContext)
    console.log(user?.email)

    const { data: selected = [], refetch } = useQuery(['selected'], async () => {
        // const res = await fetch('http://localhost:5000/course-select')
        const res = await fetch(`http://localhost:5000/course-select?email=${user.email}`)
        return res.json();
    })

    const paymentHandler = (payDetails) => {
        console.log(payDetails)

    }

    const deleteHandler = (deleteId) => {
        console.log(deleteId._id)
        fetch(`http://localhost:5000/select-item-delete/${deleteId?._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(deleteId)
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Delete`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className='px-3 md:px-16'>
            <h1 className='py-3 text-center text-3xl'>Selected Class: {selected?.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Course Details</th>
                                <th>Available Seats</th>
                                <th>Total Enroll</th>
                                <th>Price</th>
                                <th>Payment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selected?.map((select, index) => <SelectedClassCard
                                    key={select?._id}
                                    select={select}
                                    index={index}
                                    paymentHandler={paymentHandler}
                                    deleteHandler={deleteHandler}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default SelectedClass;