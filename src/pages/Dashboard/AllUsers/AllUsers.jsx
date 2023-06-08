import React, { useContext } from 'react';
import useUsers from '../../../hooks/useUsers';
import { AuthContext } from '../../../providers/AuthProvider';
import AllUsersTable from './AllUsersTable';
import { useQuery } from '@tanstack/react-query'



const AllUsers = () => {
    const { user } = useContext(AuthContext)

    const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/all-users')
        return res.json();
    })


    // button
    const handleMakeAdmin = allUser => {
        fetch(`http://localhost:5000/users/admin/${allUser._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    console.log('admin')
                }
            })
    }

    return (
        <div className="overflow-x-auto">
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
                        />)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllUsers;