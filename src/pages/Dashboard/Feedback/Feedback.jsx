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
            <h1 className='py-3 text-center text-3xl'>Feedback</h1>

            <div className='grid grid-cols-3 gap-5'>
                {
                    allDeny?.map(deny => <FeedbackCard
                        key={deny._id}
                        deny={deny}
                    />)
                }
            </div>
        </div>
    );
};

export default Feedback;