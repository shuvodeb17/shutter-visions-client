import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate, useLocation, Navigate, } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    let location = useLocation();


    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoute;