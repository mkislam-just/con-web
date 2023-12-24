import React from 'react';
import makeAdmin from '../../../Services/makeAdmin';
import './UpdateConferenceDate.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateConferenceDate = () => {
    let navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target
        const PaperSubmissionDeadline = form.PaperSubmissionDeadline.value;
        const AcceptanceNotification = form.AcceptanceNotification.value;
        const CameraReadySubmission = form.CameraReadySubmission.value;
        const RegistrationDeadline = form.RegistrationDeadline.value;
        const ConferenceDate = form.ConferenceDate.value;
        const Date = {
            PaperSubmissionDeadline,
            AcceptanceNotification,
            CameraReadySubmission,
            RegistrationDeadline,
            ConferenceDate
        }

        const res = await makeAdmin.UpdateDate(Date);
        if (res) {
            Swal.fire(
                'UpDated!',
                'Successfully Updated!',
                'success'
              )
              navigate('/dates');
        }

    }
    return (
        <div className='UpdateDateBG'>
            <h4 className='text-center'>Update Important Dates </h4>
            <form onSubmit={handleSubmit} id="contactForm" class="col-md-6 col-sm-12 col-xs-12  m-auto py-5 mb-5" name="contact">

                <div class="mb-3">
                    <label for="PaperSubmissionDeadline" class="form-label">Paper Submission Deadline</label>
                    <input required="true" name="PaperSubmissionDeadline" type="text" class="form-control" id="PaperSubmissionDeadline" placeholder="Paper Submission Deadline" />
                </div>
                <div class="ml-auto mr-auto mb-3">
                    <label for="AcceptanceNotification" class="form-label">Acceptance Notification</label>
                    <input required="true" name="AcceptanceNotification" type="text" class="form-control" id="AcceptanceNotification" placeholder="AcceptanceNotification" />
                </div>
                <div class="ml-auto mr-auto mb-3">
                    <label for="CameraReadySubmission" class="form-label">Camera Ready Submission</label>
                    <input required="true" name="CameraReadySubmission" type="text" class="form-control" id="CameraReadySubmission" placeholder="Camera Ready Submission" />
                </div>
                <div class="ml-auto mr-auto mb-3">
                    <label for="RegistrationDeadline" class="form-label">Registration Deadline</label>
                    <input required="true" name="RegistrationDeadline" type="text" class="form-control" id="RegistrationDeadline" placeholder="Registration Deadline" />
                </div>
                <div class="ml-auto mr-auto mb-3">
                    <label for="ConferenceDate" class="form-label">Date of the Conference</label>
                    <input required="true" name="ConferenceDate" type="text" class="form-control" id="ConferenceDate" placeholder="Registration Deadline" />
                </div>

                <div className="text-center">
                    {/* <button class="btn btn-outline-success text-light" type='submit'>Submit</button> */}
                    <button class="button-57" type='submit'><span class="text">Submit</span><span>Update</span></button>
                </div>
            </form>
        </div>
    );
};

export default UpdateConferenceDate;