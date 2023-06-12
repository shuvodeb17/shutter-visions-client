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
            <th>
                <p className="px-1 py-1 text-center rounded bg-green-600 text-white">{allUser?.role}</p>
            </th>
            <td>
                {
                    allUser?.role == 'student' &&
                    <>
                        <button onClick={() => handleMakeAdmin(allUser)} className="btn btn-ghost btn-xs">
                            Make Admin
                        </button>
                        
                        <button onClick={() => handleMakeInstructor(allUser)} className="btn btn-ghost btn-xs">
                            Make Instructor
                        </button>
                    </>
                }
            </td>
        </tr>
    );
};

export default AllUsersTable;