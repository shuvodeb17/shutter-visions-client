import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
import AllClassesTable from './AllClassesTable';

const AllClasses = () => {

    const { user } = useContext(AuthContext)

    const { data: allClasses = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/all-classes')
        return res.json();
    })

    const enrollButton = (enrollDetails) => {
        const allDetails = {
            ...enrollDetails,
            email: user.email
        }
        console.log(enrollDetails, user?.email)
        fetch(`http://localhost:5000/selected-course`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Selected`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className='px-3 md:px-5 my-navbar'>
            <h1 className='py-3 text-center text-3xl font-bold text-[#002058]'>All Classes: {allClasses?.length}</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    allClasses?.map(allClass => <AllClassesTable
                        key={allClass._id}
                        allClass={allClass}
                        enrollButton={enrollButton}
                    />)
                }
            </div>
        </div>
    );
};

export default AllClasses;