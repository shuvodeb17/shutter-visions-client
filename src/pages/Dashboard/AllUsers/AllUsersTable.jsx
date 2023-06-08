import React from 'react';

const AllUsersTable = ({ allUser, index, handleMakeAdmin }) => {



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
                    {allUser.role === 'admin' ? 'remove' : 'Admin'}
                </button>
                <button className="btn btn-ghost btn-xs">Instructor</button>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default AllUsersTable;