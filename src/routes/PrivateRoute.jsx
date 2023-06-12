import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate, useLocation, Navigate, } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    let location = useLocation();

    if(loading){
        return <h2>Loading</h2>
    }


    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoute;