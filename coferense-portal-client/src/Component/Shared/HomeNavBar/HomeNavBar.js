import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './HomeNavBar.css'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const HomeNavBar = () => {
    const { loggedUser, logOut } = useContext(AuthContext);
    const handleLogout =() =>{
        logOut()
        .then(()=>{})
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className='my-3'>
            <div className='NavContainer'>
                <nav className="navbar navbar-expand-lg text-center">
                    <div className="ms-auto">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <div>
                                <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_klVntvTZBrSSprLC8Yj4CLrTmBc_jjv1g&usqp=CAU" alt="" />
                            </div>
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/committee'>Committees</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/dates'>Important Dates</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/reviews'>Submission</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/reviews'>Registration</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/reviews'>Speakers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/contact'>Contact</Link>
                                </li>
                                <li className="nav-item">

                                {loggedUser?.email? <Link onClick={handleLogout}className="nav-link" to='/login'>LogOut</Link>: <Link className="nav-link" to='/login'>LogIn</Link>}
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default HomeNavBar;