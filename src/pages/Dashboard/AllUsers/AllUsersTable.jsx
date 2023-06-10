import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';

const AllUsersTable = ({ allUser, index, handleMakeAdmin, handleMakeInstructor }) => {
    console.log(allUser.role)



    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={allUser?.photo} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {allUser?.name}
            </td>
            <td>
                {allUser?.email}
            </td>
            <td>
                        <button onClick={() => handleMakeAdmin(allUser)} className="btn btn-ghost btn-xs">
                            {
                                allUser.role == 'admin' ?
                                    'Admin' : <AiOutlineUserAdd size={20} />
                            }
                        </button>
                        
                        <button onClick={() => handleMakeInstructor(allUser)} className="btn btn-ghost btn-xs">
                            {allUser?.role == 'instructor' ? 'Instructor' : <FaUserGraduate size={18} />}
                        </button>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">{allUser?.role}</button>
            </th>
        </tr>
    );
};

export default AllUsersTable;