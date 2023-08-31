import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ReviewerPrivetRoute = ({children}) => {
    const {loading , reviewer } = useContext(AuthContext);
    
    if (loading) {
        return <progress className="progress w-100"></progress>
    }

    if (reviewer?.length) {
        return children;
    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'You Are Not Authorized User!',
            showConfirmButton: false,
            timer: 1500
          })
    }    

    return <Navigate to="/home" replace></Navigate>
};

export default ReviewerPrivetRoute;