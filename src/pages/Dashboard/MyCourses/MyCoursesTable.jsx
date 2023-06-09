import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';


const MyCoursesTable = ({ allCourse, index }) => {
    console.log(allCourse)

    // handle delete
    const handleDelete = allCourse => {
        console.log(allCourse._id)
    }

    return (

        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={allCourse?.courseImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{allCourse?.instructorName}</div>
                        <div className="text-sm opacity-50">{allCourse?.instructorEmail}</div>
                    </div>
                </div>
            </td>
            <td>
                {allCourse?.courseName}
            </td>
            {/* <td>{allCourse?.}</td> */}
            <td>{allCourse?.status}</td>
            <th>
                <button className="bg-red-600 rounded-full p-3 text-[#ddd]" onClick={() => handleDelete(allCourse)}>
                    <BsFillTrash3Fill size={20} />
                </button>
            </th>
        </tr>
    );
};

export default MyCoursesTable;