import React from 'react';
import './AuthorHome.css'
import { useContext } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AuthorHome = () => {
    const { loggedUser } = useContext(AuthContext);
    return (
        <div className='text-center'>
            {console.log(loggedUser)}
            <h1>{loggedUser?.name} HomePage</h1>

            <section className='my-5'>
                <h3 className='text-center text-bg-danger mx-5'><IoIosArrowBack /><IoIosArrowBack />Important Dates<MdOutlineArrowForwardIos /><MdOutlineArrowForwardIos /></h3>
                <div className='text-center my-5'>
                    <h6><strong>Paper Submission Deadline : </strong> <strong className='text-primary'> March 31, 2023</strong></h6>
                    <h6><strong>Acceptance Notification : </strong> <strong className='text-danger'>May 30, 2023</strong></h6>
                    <h6><strong>Camera Ready Submission : </strong> <strong className='text-info'>June 15, 2023</strong> </h6>
                    <h6><strong>Registration Deadline : </strong><strong className='text-success'>June 30, 2023</strong></h6>
                    <Link to='submit'>
                        <button type="button" class="btn btn-outline-info my-5">Call For Paper</button>
                    </Link>

                </div>
            </section>


            



        </div>
    );
};

export default AuthorHome;