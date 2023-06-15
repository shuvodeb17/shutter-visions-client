import React, { useEffect, useState } from 'react';
import InstructorTable from './InstructorTable';

const Instructors = () => {

    const [instructor, setInstructor] = useState([]);
    useEffect(() => {
        fetch(`https://shutter-vission-server.vercel.app/instructor-all`)
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])

    return (
        <div className='px-3 md:px-16'>
            <h1 className='py-3 text-center text-3xl'>Instructors: {instructor?.length}</h1>

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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructor?.map((singleInstructor, index) => <InstructorTable
                            key={singleInstructor?._id}
                            singleInstructor={singleInstructor}
                            index={index}
                            /> )
                        }                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructors;