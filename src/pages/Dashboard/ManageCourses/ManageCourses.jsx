import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import ManageCoursesTable from './ManageCoursesTable';

const ManageCourses = () => {
    const { data: allCourses = [], refetch } = useQuery(['courses'], async () => {
        const res = await fetch('https://shutter-vission-server.vercel.app/all-courses')
        return res.json();
    })

    const approvedButton = (course) => {
        fetch(`https://shutter-vission-server.vercel.app/updates/${course?._id}`, {
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


    // deny button
    const denyButton = (course) => {
        console.log(course)
        fetch(`https://shutter-vission-server.vercel.app/deny/${course?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                }
            })
    }



    return (
        <div className='px-3 md:px-16'>
            <h1 className='py-3 text-center text-3xl'>Manage Classes: {allCourses?.length}</h1>

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
                                denyButton={denyButton}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCourses;