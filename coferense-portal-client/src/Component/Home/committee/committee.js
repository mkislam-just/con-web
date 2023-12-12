import React from 'react';
import './committee.css'

const Committee = ({ committeeInfo }) => {
    console.log("committeeInfo", committeeInfo[0]);
    return (
        <div class="card committeeCard py-3 px-2 ms-2">
            <h5 className='text-center'><strong className='text-info border-bottom border-dark'>{committeeInfo[0]?.mainCommittee?.committeeName}</strong></h5>
            <div className='my-3'>
                {
                    committeeInfo[0].mainCommittee?.members.map((members, index) => (
                        <div className='mb-1 ms-5'>
                            <p><strong>{members?.name} </strong>, <strong>{members?.affiliation}  </strong>, <strong>{members?.designation} </strong></p>
                        </div>
                    ))
                }
                {/* <div className='d-flex'>
            <button type="button" class="btn btn-info ms-auto">Update</button>
            <button type="button" class="btn btn-danger ms-auto">Delete</button>
            </div> */}
            </div>


        </div>
    );
};

export default Committee;