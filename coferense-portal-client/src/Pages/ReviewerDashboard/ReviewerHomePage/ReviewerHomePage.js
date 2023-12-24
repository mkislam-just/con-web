import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import { BsArrowUpCircleFill } from "react-icons/bs";
// import { BsArrowDownCircle } from "react-icons/bs";
import './ReviewerHomePage.css'
import ReactPaginate from 'react-paginate';
import OpenModalByReviewer from '../OpenModalByReviewer/OpenModalByReviewer';
import { AuthContext } from '../../../Component/Context/AuthProvider/AuthProvider';
const ReviewerHomePage = () => {

    const papers = useLoaderData()
    const [PaperList, setPaperList] = useState([])
    


    // const [open, setOpen] = useState(false);
    const [state, setState] = useState({
        link: "",
        title: ""
    });
    // const renderOpenClose = () => {
    //     setOpen(!open)
    // }


    
    const { loggedUser } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/submit/get-reviewer-assigned-paper-by-email?email=${loggedUser.email}`)
            .then(res => res.json())
            .then(data => setPaperList(data.data))
    }, [loggedUser?.email])

    // 
    const [pageNumber, setPageNumber] = useState(0);
    const papersPerPage = 8;
    const paperVisited = pageNumber * papersPerPage;
    const paginatePaper = PaperList.slice(paperVisited, paperVisited + papersPerPage);
    const displayPaper = paginatePaper.map((paper, index) => {
        return (

            <>
                <div class="card p-2 m-2" style={{ width: "48%" }}>
                    <div class="card-block">
                        <div>
                            <h5 className='cd-header'>{paper.title}</h5>
                        </div>

                        <div className='card-body'>
                            <p class="abstract-text">{paper.abstract}</p>
                        </div>
                        <div className='text-end'>
                            {/* <!-- Button trigger modal --> */}

                            <div class="buttons">
                                <Link to={`/reviewer/add-review/${paper._id}`} state={{
                                    paper: paper
                                }} class="btn btn-outline-info me-2">
                                    Add Review
                                </Link>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setState({ link: paper.fileURL, title: paper.title })}>
                                    Open PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <!-- Modal --> */}
                <OpenModalByReviewer paper={paper} state={state}></OpenModalByReviewer>

            </>
        )
    });
    const pageCount = Math.ceil(PaperList.length / papersPerPage);
    const handlePageClick = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <div className='ReviewerTitle'>
            
            <h4 className='text-center'> Paper List </h4>

            <div className='container d-flex ms-4 BGC'>
                {displayPaper}
                {console.log("Rakaaaaaaaaaaaaaaaaaaaaaaaal",PaperList)}
            </div>
            <div className='ul-center my-3'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="NEXT >>"
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    previousLabel="<< previous"
                    containerClassName={"paginationBtn"}
                    previousLinkClassName={"PreviousBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}

                />
            </div>
        </div>
    );
};

export default ReviewerHomePage;