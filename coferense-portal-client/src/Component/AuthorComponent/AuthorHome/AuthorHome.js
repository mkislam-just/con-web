import React from 'react';
import './AuthorHome.css'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom';

const AuthorHome = () => {
    
    return (
        <div className='text-center'>
            <section className='my-2'>
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