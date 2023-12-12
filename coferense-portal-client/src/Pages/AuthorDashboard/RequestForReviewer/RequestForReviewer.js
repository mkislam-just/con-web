import React, { useContext, useState } from 'react';
import reviewerServices from '../../../Services/reviewerServices';
import Swal from 'sweetalert2'
import { AuthContext } from '../../../Component/Context/AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';


const RequestForReviewer = () => {
    const { loggedUser } = useContext(AuthContext);
    const loadedUser = useLoaderData();
    const [requestedReviewerList, setRequestedReviewerList] = useState(loadedUser.data);
    let checkRequestedOrNot = requestedReviewerList.filter(item => item?.email === loggedUser.email);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const description = form.description.value;
        const contact = {
            name,
            email,
            description
        }

        console.log(contact);
        const res = await reviewerServices.postReviewer(contact)
        if (res) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Reviewer Added SuccessFully',
                showConfirmButton: false,
                timer: 1500
            })
            form.reset()
        }
        // const res = await contactServices.postContact(contact)
        // if(res){
        //     console.log("res received");
        // }

    }
    return (

        <div >
            {
                checkRequestedOrNot.length ? <h1>Already Requested</h1> :

                    <>
                        <h2 className='text-center my-3'>Provide your Pertinence</h2>
                        <form onSubmit={handleSubmit} class="col-md-6 col-sm-12 col-xs-12  m-auto py-3 text-dark" name="contact">

                            <div class="mb-4">
                                <label for="inputName" class="form-label text-dark"><strong>Name :</strong></label>
                                <input required="true" name="name" type="text" class="form-control" placeholder="Your Name" disabled value={loggedUser?.displayName} />
                            </div>
                            <div class=" ml-auto mr-auto mb-4">
                                <label for="inputEmail" class="form-label text-dark"><strong>Email :</strong></label>
                                <input required="true" name="email" type="text" class="form-control" value={loggedUser.email} disabled placeholder="Your Email" />
                            </div>
                            <div class="ml-auto mr-auto mb-2">
                                <label for="inputMassage" class="form-label text-dark"><strong>Your Massage :</strong>
                                </label>
                                <textarea required="true" name="description" type="text" class="form-control" id="inputMassage" placeholder="Your Massage" style={{ height: "150px" }}>
                                </textarea>
                            </div>
                            <div className="text-center">
                                <button class="btn btn-outline-info text-dark" type='submit'>Submit</button>
                            </div>
                        </form>
                    </>

            }



        </div>
    );
};

export default RequestForReviewer;