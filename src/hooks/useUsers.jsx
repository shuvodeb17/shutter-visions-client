import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useUsers = () => {
    const { user } = useContext(AuthContext)
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        fetch(`https://shutter-vission-server.vercel.app/all-users`,{
            method:'GET'
        })
            .then(res => res.json())
            .then(data => {
                setAllUsers(data)
            })
    }, [])

    return [allUsers];
};

export default useUsers;