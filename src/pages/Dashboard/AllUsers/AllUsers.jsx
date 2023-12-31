import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
import AllUsersTable from './AllUsersTable';



const AllUsers = () => {
    const { user } = useContext(AuthContext)

    const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://shutter-vission-server.vercel.app/all-users')
        return res.json();
    })


    // button make admin
    const handleMakeAdmin = allUser => {
        fetch(`https://shutter-vission-server.vercel.app/users/admin/${allUser._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Make Admin Successful`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                      
                }
            })
    }
    const handleMakeInstructor = allUser => {
        fetch(`https://shutter-vission-server.vercel.app/users/instructor/${allUser._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Make Instructor Successful`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                      
                }
            })
    }

    // button make instructor

    return (
        <div className="overflow-x-auto px-3 md:px-16">
            <h1 className="text-3xl text-center font-bold py-3">Manage Users: {allUsers?.length}</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers?.map((allUser, index) => <AllUsersTable
                            key={allUser._id}
                            allUser={allUser}
                            index={index}
                            handleMakeAdmin={handleMakeAdmin}
                            handleMakeInstructor={handleMakeInstructor}
                        />)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllUsers;