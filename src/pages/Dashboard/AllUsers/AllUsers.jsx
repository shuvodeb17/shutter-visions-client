import React, { useContext } from 'react';
import useUsers from '../../../hooks/useUsers';
import { AuthContext } from '../../../providers/AuthProvider';
import AllUsersTable from './AllUsersTable';

const AllUsers = () => {
    const { user } = useContext(AuthContext)
    const [allUsers] = useUsers();
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
                        />)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllUsers;