import React, { useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import 'firebase/auth';
import './SignUp.css';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Component/Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const SignUp = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        success: null,
    })
    const [error, setError] = useState('')

    let navigate = useNavigate();
    
    const handleBlur = (e) => {
        
        const newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        console.log(newUser);
        setUser(newUser);
        setError('')


    }
 
  const { createUser, googleSignIn } = useContext(AuthContext);
    const handleCreateAccount = (e) => {
        if (user.email) {
            if (!error) {
                createUser(user.email, user.password)
                    .then(res => {
                        const newUserinfo = { ...user };
                        setError('');
                        newUserinfo.success = true;
                        newUserinfo.name = user.name;
                        setUser(newUserinfo);
                        navigate('/author')
                    })
                    .catch((error) => {
                        var errorMessage = error.message;
                        console.log(error);
                        setError(errorMessage);
                        const newUser = { ...user };
                        newUser.success = false;
                        setUser(newUser)

                    });
            }

        }
    e.preventDefault()
    }





    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        googleSignIn(provider)
            .then(res => {
                console.log(res)
                const newUserinfo = { ...user }
                setError('');
                newUserinfo.success = true;
                newUserinfo.email = res.user.email;
                newUserinfo.name = res.user.displayName;
                setUser(newUserinfo);
                navigate('/author');
                Swal.fire({
                    title: '<strong>Wanna be a Reviewer?</strong>',
                    icon: 'question',
                    html:
                      '<b><a className="link" href="/reviewer-qualification">Please Provide your Pertinence</a></b>',
                     showCloseButton: true,
                     showConfirmButton: false,
                    // showCancelButton: true,
                    // focusConfirm: false,
                    // cancelButtonAriaLabel: 'Thumbs down'
                  }
                    
                  )
            }).catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;
                setError(errorMessage);
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage, email, errorCode, credential)

            });

    }


    return (


        <div className=''>
            <div className="text-center regFormColor py-3">
                <h3 className='signUp'> <img src="./sign-up-icon-5.png" alt="icon" className='signUpImg' /> Sign Up </h3>

                <form onSubmit={handleCreateAccount}>
                    <input className="inputField" type="text" name="name" onBlur={handleBlur} placeholder='Enter your Name' required />
                    <br />
                    <input className="inputField" type="email" name="email" onBlur={handleBlur} placeholder="Enter your email" required />
                    <br />
                    <input className="inputField" type="password" name="password" onBlur={handleBlur} placeholder="Enter your password with more than 6 character" required />
                    <br />
                    <div className='d-grid gap-2 col-6 mx-auto my-4'>
                        <input className="btn btn-outline-secondary" type="submit" value="Create Account" />
                    </div>

                </form>
                <p className="text-danger">{error}</p>
                {user.success && <div><p className="success">User created successfully </p> <b> <Link className="link" to='/login'> Click Here To LogIn </Link> </b></div>}


                <div className='forHr'>
                    <div className='mx-auto d-flex align-items-center col-7'>
                        <div className='w-100'>
                            <hr />
                        </div>
                        <h5 className='mx-2'>Or</h5>
                        <div className='w-100'>
                            <hr />
                        </div>
                    </div>

                    {!user.success && <button className="btn btn-outline-success inputField" onClick={handleGoogleSignIn}><FaGoogle className="google"></FaGoogle> Google Sign in</button>}
                    
                </div>
            </div>
        </div>

    );
};

export default SignUp;

