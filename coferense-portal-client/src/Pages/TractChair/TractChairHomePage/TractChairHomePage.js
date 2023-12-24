import React, { useState } from 'react';
import './TrackChairHomePage.css'
import { Link, useLoaderData } from 'react-router-dom';
import OpenModalByReviewer from '../../ReviewerDashboard/OpenModalByReviewer/OpenModalByReviewer';
import ReactPaginate from 'react-paginate';

// import Select from 'react-select';

const TractChair = () => {
    const papers = useLoaderData()
    const [PaperList, setPaperList] = useState(papers.data)
    const [state, setState] = useState({
        link: "",
        title: ""
    });
    // let options = []
    // useEffect(() => {
    //     fetch("http://localhost:8080/api/v1/reviewer/selected-reviewer-list")
    //         .then(res => res.json())
    //         .then(data => {
    //             data.data.map(d => options.push({ value: d.email, label: d.name }))
    //         })
    // }, [options])

    // const [reviewerList, setReviewersList] = useState([])
    // const handleChange = (reviewerEmail) => {
    //     setReviewersList(reviewerEmail)
    // }
    const [pageNumber, setPageNumber] = useState(0);
    const papersPerPage = 8;
    const paperVisited = pageNumber * papersPerPage;
    const paginatePaper = PaperList.slice(paperVisited, paperVisited + papersPerPage);
    const displayPaper = paginatePaper.map((paper, index) => {
        return (

            <div className='col-md-4'>

                <div class="card p-2 m-2">
                    <div class="card-block">
                        <div>
                            <h6 className='cd-header'>{paper.title}</h6>
                        </div>

                        <div className='card-body'>
                            <p class="abstract-text">{paper.abstract}</p>
                        </div>
                        <div className='text-end'>
                            {/* <!-- Button trigger modal --> */}

                            <div class="buttons">
                                <Link to={`/tract-chair/add-paper-to-reviewer/${paper._id}`} state={{
                                    paper: paper
                                }} class="btn btn-outline-info me-2">
                                    Assign Reviewer
                                </Link>
                                <button type="button" class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setState({ link: paper.fileURL, title: paper.title })}>
                                    Open PDF
                                </button>
                                {/* <div className='d-flex'>
                                    <strong for="">Assign Reviewer : </strong>
                                    <div className='w-75 ms-1'>
                                        <Select
                                            options={options}
                                            value={reviewerList}
                                            onChange={handleChange}
                                            isMulti={true}
                                            isRtl={true}
                                        />
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>



                {/* <!-- Modal --> */}
                <OpenModalByReviewer paper={paper} state={state}></OpenModalByReviewer>

            </div>
        )
    });
    const pageCount = Math.ceil(PaperList.length / papersPerPage);
    const handlePageClick = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <div className='TitleForCreatingCommittee'>
            <h4 className='text-center'> Paper List </h4>
            <div className='container row ms-1'>
                {displayPaper}
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

export default TractChair;