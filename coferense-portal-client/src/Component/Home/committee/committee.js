import React from 'react';
import './committee.css'

const Committee = ({ committeeInfo }) => {
    console.log("committeeInfo", committeeInfo);
    return (
        <section className='CommitteeContainer mb-5'>
            <h4 className='text-center'> Important Dates </h4>
            <div className='container d-flex'>
                {
                    committeeInfo.map((item, index) => 
                    
                    (
                        <div class="card committeeCard  py-3 px-2 ms-2">
                            <h5 className='text-center'><strong className='text-info border-bottom border-dark'>{committeeInfo[index]?.mainCommittee?.committeeName}</strong></h5>
                            <div className='my-3'>
                                {
                                    committeeInfo[index].mainCommittee?.members.map((members, index) => (
                                        <div className='mb-1 ms-5'>
                                            <p><strong>{members?.name} </strong>, <strong>{members?.affiliation}  </strong>, <strong>{members?.designation} </strong> </p>
                                            <p> Email : <small>{members?.email}</small></p>
                                        </div>
                                    ))
                                }
                                                            {/* <div className='d-flex'>
                                        <button type="button" class="btn btn-info ms-auto">Update</button>
                                        <button type="button" class="btn btn-danger ms-auto">Delete</button>
                                        </div> */}
                            </div>

                            <h5 className='text-center'><strong className='text-info border-bottom border-dark'>{committeeInfo[index]?.subCommittee?.subCommitteeName}</strong></h5>
                            <div className='my-3'>
                                {
                                    committeeInfo[index].subCommittee?.subCommitteeMembers.map((members, index) => (
                                        <div className='mb-1 ms-5'>
                                            <p><strong>{members?.name} </strong>, <strong>{members?.affiliation}  </strong>, <strong>{members?.designation} </strong></p>
                                            <p> Email : <small>{members?.email}</small></p>
                                        </div>
                                    ))
                                }

                            </div>

                        </div>
                    
                    ))
                }
            </div>
        </section>
    );
};

export default Committee;