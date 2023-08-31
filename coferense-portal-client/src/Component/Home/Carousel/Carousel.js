import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'
import versityOne from '../../../asset/images/basketField.jpg';
import versityTwo from '../../../asset/images/wetView.jpg';
import versityThree from '../../../asset/images/versity1`.jpg';
import './Carousel.css'


const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner forOverlay">
                    <div class="carousel-item  active" data-bs-interval="4000">
                        <img src={versityOne} style={{ height: '600px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block fw-bold text-light">
                            <p className='px-5 py-3 text-start'>
                                <h3 className='text-center text-bg-danger mx-5'><IoIosArrowBack /><IoIosArrowBack />Important Dates<MdOutlineArrowForwardIos /><MdOutlineArrowForwardIos /></h3>
                                <h6><strong>Paper Submission Deadline : </strong> <strong className='text-primary'> March 31, 2023</strong></h6>
                                <h6><strong>Acceptance Notification : </strong> <strong className='text-danger'>May 30, 2023</strong></h6>
                                <h6><strong>Camera Ready Submission : </strong> <strong className='text-info'>June 15, 2023</strong> </h6>
                                <h6><strong>Registration Deadline : </strong><strong className='text-success'>June 30, 2023</strong></h6>
                                <h3 className='text-center'><button type="button" class="btn btn-outline-secondary my-3 text-white m-auto">Call For Paper</button></h3>
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <img src={versityTwo} style={{ height: '600px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block fw-bold text-light">
                        <p className='px-5 py-3 text-start'>
                                <h3 className='text-center text-bg-danger mx-5'><IoIosArrowBack /><IoIosArrowBack />Important Dates<MdOutlineArrowForwardIos /><MdOutlineArrowForwardIos /></h3>
                                <h6><strong>Paper Submission Deadline : </strong> <strong className='text-primary'> March 31, 2023</strong></h6>
                                <h6><strong>Acceptance Notification : </strong> <strong className='text-danger'>May 30, 2023</strong></h6>
                                <h6><strong>Camera Ready Submission : </strong> <strong  className='text-info'>June 15, 2023</strong> </h6>
                                <h6><strong>Registration Deadline : </strong><strong  className='text-success'>June 30, 2023</strong></h6>
                                <h3 className='text-center'><button type="button" class="btn btn-outline-secondary my-3 text-white m-auto">Call For Paper</button></h3>
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <img src={versityThree} style={{ height: '600px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block fw-bold text-light">
                        <p className='px-5 py-3 text-start'>
                                <h3 className='text-center text-bg-danger mx-5'><IoIosArrowBack /><IoIosArrowBack />Important Dates<MdOutlineArrowForwardIos /><MdOutlineArrowForwardIos /></h3>
                                <h6><strong>Paper Submission Deadline : </strong> <strong className='text-primary'> March 31, 2023</strong></h6>
                                <h6><strong>Acceptance Notification : </strong> <strong className='text-danger'>May 30, 2023</strong></h6>
                                <h6><strong>Camera Ready Submission : </strong> <strong  className='text-info'>June 15, 2023</strong> </h6>
                                <h6><strong>Registration Deadline : </strong><strong  className='text-success'>June 30, 2023</strong></h6>
                                <h3 className='text-center'><button type="button" class="btn btn-outline-secondary my-3 text-white m-auto">Call For Paper</button></h3>
                            </p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;