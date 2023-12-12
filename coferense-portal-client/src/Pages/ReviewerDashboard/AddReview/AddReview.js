import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Component/Context/AuthProvider/AuthProvider';
import './Addreview.css'

const AddReview = () => {
    const location = useLocation();
    const { paper } = location.state;
    const { loggedUser } = useContext(AuthContext);
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        // Get the current date and time
        const currentDate = new Date();

        // Format the current date and time in the desired short format
        const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1
            }/${currentDate.getFullYear()} ${formatAMPM(currentDate)}`;

        // Update the state with the formatted date
        setCurrentDate(formattedDate);
    }, []);

    // Function to format the time in 12-hour format with AM/PM
    const formatAMPM = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";

        // Convert hours from 24-hour format to 12-hour format
        hours %= 12;
        hours = hours || 12;

        // Ensure minutes are always displayed with two digits
        minutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${hours}:${minutes} ${ampm}`;
    };

    return (
        <>


            <div class="style d-flex align-items-center w-auto m-auto">
                <hr />
                <h5 className='text-center reviewerName'><p>Reviewing By <strong>{loggedUser.displayName}</strong></p></h5>
                <hr />
            </div>

            <div className='container px-5 py-5 form-body'>
                <section className=''>
                    <p><strong>Paper Title : {paper.title}</strong></p>
                    <p>Paper Domain : {paper.paperDomain}</p>
                    <p>Current Date And Time : {currentDate}</p>
                </section>
                <div className='p-5 ms-5 container'>
                    <section className='d-flex align-items-center'>
                        <strong><label for="" className='text-dark'> Overall Evaluation : </label></strong>
                        <select class="form-select form-select-lg ms-5 w-75 ms-auto" aria-label=".form-select-lg example align-items-center">
                            <option selected>Click For Overall Evaluation</option>
                            <option value="1">Strong Accept</option>
                            <option value="2">Accept</option>
                            <option value="3">Weak Accept</option>
                            <option value="3">Neutral</option>
                            <option value="3">Weak Reject</option>
                            <option value="3">Reject</option>
                            <option value="3">Strong Reject</option>
                        </select>
                    </section>
                    <section>
                        <div class="my-3 d-flex align-items-center">
                            <strong><label for="exampleFormControlTextarea1" class="form-label text-dark">Details Evaluation : </label></strong>
                            <textarea class="form-control w-75 ms-auto" id="exampleFormControlTextarea1" rows="3" placeholder='Provide Your Details Evaluation ...'></textarea>
                        </div>
                    </section>
                    <section className='d-flex align-items-center mb-3'>
                        <strong><label for="" className='text-dark'> Abstract : </label></strong>
                        <select class="form-select form-select-lg ms-5 w-75 ms-auto" aria-label=".form-select-lg example align-items-center">
                            <option selected>Open this select menu</option>
                            <option value="1">Strong Accept</option>
                            <option value="2">Accept</option>
                            <option value="3">Weak Accept</option>
                            <option value="3">Neutral</option>
                            <option value="3">Weak Reject</option>
                            <option value="3">Reject</option>
                            <option value="3">Strong Reject</option>
                        </select>
                    </section>
                    <section className='d-flex align-items-center mb-3'>
                        <strong><label for="" className='text-dark'> Introduction : </label></strong>
                        <select class="form-select form-select-lg ms-5 w-75 ms-auto" aria-label=".form-select-lg example align-items-center">
                            <option selected>Open this select menu</option>
                            <option value="1">Strong Accept</option>
                            <option value="2">Accept</option>
                            <option value="3">Weak Accept</option>
                            <option value="3">Neutral</option>
                            <option value="3">Weak Reject</option>
                            <option value="3">Reject</option>
                            <option value="3">Strong Reject</option>
                        </select>
                    </section>
                    <section className='d-flex align-items-center mb-3'>
                        <strong><label for="" className='text-dark'> Literature Review : </label></strong>
                        <select class="form-select form-select-lg ms-5 w-75 ms-auto" aria-label=".form-select-lg example align-items-center">
                            <option selected>Open this select menu</option>
                            <option value="1">Strong Accept</option>
                            <option value="2">Accept</option>
                            <option value="3">Weak Accept</option>
                            <option value="3">Neutral</option>
                            <option value="3">Weak Reject</option>
                            <option value="3">Reject</option>
                            <option value="3">Strong Reject</option>
                        </select>
                    </section>
                    <section className='d-flex align-items-center mb-3'>
                        <strong><label for="" className='text-dark'> Result : </label></strong>
                        <select class="form-select form-select-lg ms-5 w-75 ms-auto" aria-label=".form-select-lg example align-items-center">
                            <option selected>Open this select menu</option>
                            <option value="1">Strong Accept</option>
                            <option value="2">Accept</option>
                            <option value="3">Weak Accept</option>
                            <option value="3">Neutral</option>
                            <option value="3">Weak Reject</option>
                            <option value="3">Reject</option>
                            <option value="3">Strong Reject</option>
                        </select>
                    </section>
                    <section>
                        <div class="my-3 d-flex align-items-center">
                            <strong><label for="exampleFormControlTextarea1" class="form-label text-dark">Comment To TCP : </label></strong>
                            <textarea class="form-control w-75 ms-auto" id="exampleFormControlTextarea1" rows="3" placeholder='Comment To TCP ...'></textarea>
                        </div>
                    </section>
                    <section className='d-flex align-items-center mb-3'>
                        <strong><label for="" className='text-dark'> Reference Review: </label></strong>
                        <select class="form-select form-select-lg ms-5 w-75 ms-auto" aria-label=".form-select-lg example align-items-center">
                            <option selected>Open this select menu</option>
                            <option value="1">Strong Accept</option>
                            <option value="2">Accept</option>
                            <option value="3">Weak Accept</option>
                            <option value="3">Neutral</option>
                            <option value="3">Weak Reject</option>
                            <option value="3">Reject</option>
                            <option value="3">Strong Reject</option>
                        </select>
                    </section>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary" type="button"><strong> Submit </strong></button>
                </div>

            </div>
        </>
    );
};

export default AddReview;