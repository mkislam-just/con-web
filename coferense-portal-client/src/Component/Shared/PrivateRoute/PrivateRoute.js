import React from 'react';
import { useContext } from 'react';
import { Navigate , useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const { loggedUser, loading } = useContext(AuthContext);
    const location = useLocation();



    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (loggedUser?.email){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;