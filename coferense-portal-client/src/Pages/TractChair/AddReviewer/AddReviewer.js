import React, {  useState } from 'react';
import reviewerServices from '../../../Services/reviewerServices';
import Swal from 'sweetalert2'
import { useLoaderData } from 'react-router-dom';
const AddReviewer = () => {

    const loadedUser = useLoaderData();
console.log(loadedUser);
     const [requestedReviewerList, setRequestedReviewerList] = useState(loadedUser.data);


    // axios.get('http://localhost:8080/api/v1/reviewer')
    //     .then(data => {
    //         setRequestedReviewerList(data?.data?.data)
    //     })

    // useEffect(() => {
    //     fetch("http://localhost:8080/api/v1/reviewer")
    //         .then(res => res.json())
    //         .then(data => {
    //             setRequestedReviewerList(data?.data)
    //         })
    // }, [])

    // const loadInterestedToBeReviewer = async () => {
    //     const res = await reviewerServices.getReviewer();
    //     setRequestedReviewerList(res?.data)
    // }

    const RejectReviewerRequest = async (email) =>{


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#008000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes !'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await reviewerServices.deleteReviewerById(email);

                if (res) {
                    Swal.fire(
                        'Deleted!',
                        'Successfully Submitted!',
                        'success'
                    )
                    const remainingUsers = requestedReviewerList.filter(user => user.email !== email)
                    setRequestedReviewerList(remainingUsers)

                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Paper Submission Failed',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            }
        })
    }

    const makeReviewer = (email) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#008000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes !'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await reviewerServices.postSelectedReviewer({ 'email': email });

                if (res) {
                    const deleted = await reviewerServices.deleteReviewerById(email);
                    if(deleted){
                        Swal.fire(
                            'Uploaded!',
                            'Successfully Submitted!',
                            'success'
                        )
                        const remainingUsers = requestedReviewerList.filter(user => user.email !== email)
                        setRequestedReviewerList(remainingUsers)
                    }
                    

                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Paper Submission Failed',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            }
        })



    }




    return (
        <div className='text-center'>
            <h1 className=''>Make Reviewer here</h1>

            <table class="table table-hover mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // user?.data?.map((reviewer, index) => <ReviewerList key={index} reviewer={reviewer} index={index} makeReviewer={makeReviewer} />)
                        requestedReviewerList?.map((reviewer, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{reviewer.name}</td>
                                <td>{reviewer.email}</td>
                                <td>
                                    <button onClick={() => makeReviewer(reviewer.email)} type="button" class="btn btn-outline-dark">Make Reviewer</button>
                                    <button onClick={() => RejectReviewerRequest(reviewer.email)} type="button" class="btn btn-outline-danger">Reject Request</button>
                                </td>
                            </tr>
                        ))



                    }
                </tbody>
            </table>

        </div>
    );
};

export default AddReviewer;