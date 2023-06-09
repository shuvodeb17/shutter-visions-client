import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import ManageCoursesTable from './ManageCoursesTable';

const ManageCourses = () => {

    const { data: allCourses = [], refetch } = useQuery(['courses'], async () => {
        const res = await fetch('http://localhost:5000/all-courses')
        return res.json();
    })
    const approvedButton = (course) => {
        console.log(course?._id)
        fetch(`http://localhost:5000/updates/${course?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    console.log(data)
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



    return (
        <div className='px-3 md:px-16'>
            <h1 className='py-3 text-center text-3xl'>Manage Courses</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Course Image</th>
                            <th>Course Name</th>
                            <th>Instructor Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCourses.map((course, index) => <ManageCoursesTable
                                key={course._id}
                                course={course}
                                index={index}
                                approvedButton={approvedButton}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCourses;