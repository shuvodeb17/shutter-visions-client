import React, { useEffect, useState } from 'react';
import FeedbackCard from './FeedbackCard';
import { useQuery } from '@tanstack/react-query'


const Feedback = () => {

    const { data: allDeny = [], refetch } = useQuery(['deny'], async () => {
        const res = await fetch('http://localhost:5000/all-deny')
        return res.json();
    })


    return (
        <div className='px-3 md:px'>
            <h1 className='py-3 text-center text-3xl'>Feedback: {allDeny?.length}</h1>

            <div className='grid grid-cols-3 gap-5'>
                {
                    allDeny?.map(deny => <FeedbackCard
                        key={deny._id}
                        deny={deny}
                    />)
                }
            </div>
            {
                allDeny.length === 0 &&
                <h1 className='py-3 text-center text-2xl font-bold'>No Feedback Available</h1>
            }
        </div>
    );
};

export default Feedback;