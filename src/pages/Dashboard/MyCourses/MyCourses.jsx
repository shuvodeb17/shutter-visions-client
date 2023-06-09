import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import MyCoursesTable from './MyCoursesTable';

const MyCourses = () => {

    const { user } = useContext(AuthContext)

    const { data: allCourses = [], refetch } = useQuery(['myCourses'], async () => {
        const res = await fetch(`http://localhost:5000/my-courses?instructorEmail=${user?.email}`)
        return res.json();
    })


    return (
        <div className='px-3 md:px-16'>
            <h1 className='py-3 text-center text-3xl'>My Courses</h1>

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
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCourses?.map((allCourse, index) => <MyCoursesTable
                                key={allCourse._id}
                                allCourse={allCourse}
                                index={index}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCourses;