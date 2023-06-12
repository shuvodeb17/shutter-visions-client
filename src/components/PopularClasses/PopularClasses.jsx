import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PopularClassesCard from './PopularClassesCard';


const PopularClasses = () => {

    const { data: allClasses = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://shutter-vission-server.vercel.app/popular-classes')
        return res.json();
    })

    const enrollButton = (enrollDetails) => {
        console.log(enrollDetails)
    }

    return (
        <div className='px-3 md:px-16 py-20'>
            <div>
                <h1 className='text-3xl font-bold text-center'>Popular Classes: {allClasses?.length}</h1>
                <div className='px-3 md:px-5'>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            allClasses?.map(allClass => <PopularClassesCard
                                key={allClass._id}
                                allClass={allClass}
                                enrollButton={enrollButton}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;