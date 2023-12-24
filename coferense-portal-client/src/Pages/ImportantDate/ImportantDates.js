import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './ImportantDates.css'

const ImportantDates = () => {
    const loadedInfo = useLoaderData();
    console.log("Datessssssssssssssssssssss", loadedInfo.data);
    const [Dates, setDates] = useState(loadedInfo.data[0]);
    return (
        <div className='date'>
            <h4 className='text-center'> Important Dates </h4>
            <div className='d-flex justify-content-around mb-5'>
            <time datetime="2014-09-24" class="date-as-calendar inline-flex size3x">
                
                <span class="day">{Dates.AcceptanceNotification}</span>
                <span class="month">Acceptance Notification</span>
                
            </time>
            <time datetime="2014-09-24" class="date-as-calendar inline-flex size3x">
                
                <span class="day">{Dates.CameraReadySubmission}</span>
                <span class="month">Camera Ready Submission</span>
                
            </time>
            <time datetime="2014-09-24" class="date-as-calendar inline-flex size3x">
                
                <span class="day">{Dates.PaperSubmissionDeadline}</span>
                <span class="month">Paper Submission Deadline</span>
                
            </time>
            <time datetime="2014-09-24" class="date-as-calendar inline-flex size3x">
                
                <span class="day">{Dates.RegistrationDeadline}</span>
                <span class="month">Registration Deadline Date</span>
                
            </time>
            <time datetime="2014-09-24" class="date-as-calendar inline-flex size3x">
                
                <span class="day"><strong>{Dates.ConferenceDate}</strong></span>
                <span class="month">Date of the Conference</span>
                
            </time>
            
            
            
            
        </div>
        </div>
    );
};

export default ImportantDates;