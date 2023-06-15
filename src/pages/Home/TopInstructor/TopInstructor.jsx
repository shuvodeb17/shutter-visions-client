import React, { useEffect, useState } from 'react';
import TopInstructorCard from './TopInstructorCard';

const TopInstructor = () => {

    const [allInstructor, setAllInstructor] = useState([]);
    console.log(allInstructor)

    useEffect(() => {
        fetch(`http://localhost:5000/top-instructor`)
            .then(res => res.json())
            .then(data => {
                setAllInstructor(data)
            })
    }, [])


    return (
        <div className='pb-5 px-3 md:px-16'>
            <h1 className='py-3 text-center text-3xl'>Top Instructor</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    allInstructor?.map(instructor => <TopInstructorCard
                        key={instructor?._id}
                        instructor={instructor}
                    />)
                }
            </div>
        </div>
    );
};

export default TopInstructor;