import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useEffect } from 'react';
import AllClassesTable from './AllClassesTable';

const AllClasses = () => {

    const { data: allClasses = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/all-classes')
        return res.json();
    })

    return (
        <div className='px-3 md:px-5 my-navbar'>
            <h1 className='py-3 text-center text-3xl font-bold text-[#002058]'>All Classes</h1>
            <div className='grid grid-cols-3 gap-5'>
            {
                allClasses?.map(allClass => <AllClassesTable
                    key={allClass._id}
                    allClass={allClass}
                />)
            }
            </div>
        </div>
    );
};

export default AllClasses;