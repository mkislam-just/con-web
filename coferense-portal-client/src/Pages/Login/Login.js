import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import './LogIn.css'
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Component/Context/AuthProvider/AuthProvider';

const LogIn = () => {
    const { signIn, googleSignIn  } = useContext(AuthContext);

    const [user, setuser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        succes: ''
    })
    let navigate = useNavigate();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };




    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (isFormValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setuser(newUser);
        }
    }

    const handleLogIn = (e) => {
        if (user.email) {
            signIn(user.email, user.password)
                .then(res => {
                    const newUserinfo = { ...user }
                    newUserinfo.email = res.user.email;
                    newUserinfo.name = user.name;
                    setuser(newUserinfo);
                    newUserinfo.name = user.name;
                    setuser(newUserinfo);
                    newUserinfo.error = '';
                    newUserinfo.succes = true;
                    setuser(newUserinfo);
                    navigate(from);

                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    const newUserinfo = { ...user }
                    newUserinfo.error = errorMessage;
                    setuser(newUserinfo);
                });

        }
        e.preventDefault();
     }
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        googleSignIn(provider)
            .then(res => {
                console.log(res)
                const newUserinfo = { ...user }
                newUserinfo.error = '';
                newUserinfo.succes = true;
                newUserinfo.email = res.user.email;
                setuser(newUserinfo);
                newUserinfo.name = res.user.displayName;
                setuser(newUserinfo);
                
                navigate(from);
            }).catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                // ...
                console.log("LogIn Fail", errorCode, errorMessage, email, credential);
            });

    }
    return (
        <div className="my-5">

            <div className="loginComponent">
                <div className="text-center loginStyle">
                    <h2 className="text-muted"> <i class="bi bi-box-arrow-in-right text-muted"></i> Log In </h2>
                    <form onSubmit={handleLogIn}>
                        <input className="inputField" type="email" name="email" onBlur={handleBlur} placeholder="Enter your email" required />
                        <br />
                        <input className="inputField" type="password" name="password" onBlur={handleBlur} placeholder="Enter your password" required />
                        <br />
                        <div className='d-grid gap-2 col-6 mx-auto my-4'>

                            <input className="btn form-control btn-outline-success" type="submit" value="Log In" />
                        </div>
                    </form>
                    <p>{user.error}</p>

                    <p p className="text-muted" > Don 't have an account? <Link to='/sign-up'>Create an account</Link></p>
                    <br />
                    <div className='mx-auto d-flex align-items-center col-7 forHr'>
                        <div className='w-100'>
                            <hr />
                        </div>
                        <h5 className='mx-2'>Or</h5>
                        <div className='w-100'>
                            <hr />
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-outline-success inputField" onClick={handleGoogleSignIn}><FaGoogle className="google"></FaGoogle> Google Sign in</button>
                </div>
            </div>

        </div>
    );
};

export default LogIn;