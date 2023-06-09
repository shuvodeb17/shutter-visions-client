import React, { useContext } from 'react';
import useUsers from '../../../hooks/useUsers';
import { AuthContext } from '../../../providers/AuthProvider';
import AllUsersTable from './AllUsersTable';
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2';



const AllUsers = () => {
    const { user } = useContext(AuthContext)

    const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/all-users')
        return res.json();
    })


    // button make admin
    const handleMakeAdmin = allUser => {
        fetch(`http://localhost:5000/users/admin/${allUser._id}`, {
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
                        title: `${user.displayName} is now Admin`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                      
                }
            })
    }

    // button make instructor
    const handleMakeInstructor = allUser => {
        fetch(`http://localhost:5000/users/instructor/${allUser._id}`, {
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
                        title: `${user.displayName} is now Instructor`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    return (
        <div className="overflow-x-auto px-3 md:px-16">
            <h1 className="text-3xl text-center font-bold py-3">All Users: {allUsers?.length}</h1>
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