import React from 'react';
import { useEffect } from 'react';

const useAdmin = () => {

    useEffect(()=>{
        fetch(`http://localhost:5000/users/admin/`)
    },[])

    return (
        <div>
            
        </div>
    );
};

export default useAdmin;