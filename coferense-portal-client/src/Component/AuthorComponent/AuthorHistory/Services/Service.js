import React from 'react';

const Service = (props) => {

    const { fileURL, description, title } = props.service;
    console.log(fileURL);
    return (

        <div className='col-md-4 card'>

            
            <p></p>


            <div class="card text-center">
                <div class="card-header">
                    <h3>{title}</h3>
                </div>
                <div class="card-body">
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer text-muted">
                <p>Open a PDF file <a class="btn btn-primary" href={`http://localhost:8080/${fileURL}`}>Open</a>.</p>
                </div>
            </div>



        </div>


    );
};

export default Service;