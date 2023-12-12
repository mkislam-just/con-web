import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import  {FaUser} from 'react-icons/fa';
import  {MdOutlineRateReview} from 'react-icons/md';
import  {RiAdminFill} from 'react-icons/ri';
import  {FaUserShield} from 'react-icons/fa';
import  {HiOutlineHome} from 'react-icons/hi';
import  {ImPhone} from 'react-icons/im';



const SideBar = () => {
 

    return (
        <div>

            <div className='homeSidebar'>
                {
                    <nav className="overflow-auto forRightScroll">
                        <h5 className='text-center my-5'><button type="button" class="btn btn-outline-primary">Log In</button></h5>
                        {/* <h5 className='text-center my-5'><Link to='/login'><button type="button" class="btn btn-outline-primary">Log In</button></Link></h5> */}
                        <h6>
                        <Link to='/' className="text-dark"><HiOutlineHome /> Home Page</Link>
                        </h6>
                        <h6>
                            <Link to='/author' className="my-4 text-dark"><FaUser />Author LogIn </Link>
                        </h6>

                        <h6>
                        <Link to='/reviewer/dashboard' className="mb-4 text-dark"><MdOutlineRateReview/>Reviewer LogIn</Link>
                        </h6>
                        <h6>
                        <Link to='/admin/dashboard' className="mb-4 text-dark"><FaUserShield/>Admin LogIn</Link>
                        </h6>
                        <h6>
                        <Link to='/tract-chair' className="text-dark"><RiAdminFill />Track Chair </Link>
                        </h6>
                        <h6>
                        <Link to='/' className="text-dark"><ImPhone />  Support</Link>
                        </h6>
                        <hr className='m-0'/>
                    </nav>
                }

            </div>
        </div>
    );
};

export default SideBar;