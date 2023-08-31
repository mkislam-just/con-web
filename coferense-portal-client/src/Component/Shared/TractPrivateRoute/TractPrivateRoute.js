import React from 'react';
import { useContext } from 'react';
import { Navigate  } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const TractPrivateRoute = ({children}) => {
    const { loggedUser, loading } = useContext(AuthContext);

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (loggedUser?.email==='shongkortalukdar2017@gmail.com'){
        return children;
    }else{
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

export default TractPrivateRoute;