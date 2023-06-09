import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const ManageCoursesTable = ({ course, index, approvedButton }) => {
    console.log(course.status)

    /* const { data: courses = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/all-users')
        return res.json();
    }) */

    /* const approvedButton = (course) => {
        console.log(course?._id)
        fetch(`http://localhost:5000/updates/${course?._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    } */

    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={course.courseImage} alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {course?.courseName}
            </td>
            <td>{course?.instructorName}</td>
            <td>{course?.status}</td>
            <th>
                {
                    course?.status == 'pending' &&
                    <button onClick={() => approvedButton(course)} className="btn btn-ghost btn-xs bg-green-600 me-3">Approved</button>
                }
                <button className="btn btn-ghost btn-xs btn-warning bg-red-600">Deny</button>
            </th>
        </tr>
    );
};

export default ManageCoursesTable;