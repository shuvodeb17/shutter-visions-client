import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useEffect } from 'react';

const AllClasses = () => {

    const { data: allClasses = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/all-users')
        return res.json();
    })
    console.log(allClasses)

    return (
        <div>
            <h1>All Classes</h1>
        </div>
    );
};

export default AllClasses;