import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Select from 'react-select';

const AssignPaperToReviewer = () => {
    const loadedUser = useLoaderData();
    const [reviewersList, setReviewersList] = useState(loadedUser.data)
    const options = []
    reviewersList.map(d => options.push({ value: d.email, label: d.name }))

    const [assignedReviewerList, setAssignedReviewersList] = useState([])
    const handleChange = (reviewerEmail) => {
        setAssignedReviewersList(reviewerEmail)
    }
    return (
        <>
            <div className='d-flex mt-5'>
                <strong for="">Assign reviewer to this paper : </strong>
                <div className='w-75 ms-1'>
                    <Select
                        options={options}
                        value={assignedReviewerList}
                        onChange={handleChange}
                        isMulti={true}
                        isRtl={false}
                    />
                </div>


            </div>
            <div className='text-end'>
                <button type="button" class="btn btn-primary btn-sm me-5 mb-5 mt-2"> Assign </button>
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>{
                    reviewersList.map((reviewer, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{reviewer.name}</td>
                                <td>{reviewer.email}</td>
                                {/* <td><button type="button" class="btn btn-danger" onClick={()=>removeReviewer(reviewer.email)}> Assign </button></td> */}
                                <td><button type="button" class="btn btn-danger"> Remove </button></td>
                            </tr>
                        )

                    })
                }

                </tbody>
            </table>


        </>
    );
};

export default AssignPaperToReviewer;