import React from 'react';
import BasicRoute from './Component/root/BasicRoute';
import HomePage from './Pages/HomePage/HomePage';
import AuthorHomePage from './Pages/AuthorDashboard/AuthorHomePage/AuthorHomePage';
import PrivateRoute from './Component/Shared/PrivateRoute/PrivateRoute';
import AddAdmin from './Pages/TractChair/AddAdmin/AddAdmin';
import Services from './Component/AuthorComponent/AuthorHistory/Services/Services';
import ImportantDates from './Pages/ImportantDate/ImportantDates';
import Contact from './Pages/Contact/Contact';
import LogIn from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import TractChairHomePage from './Pages/TractChair/TractChairHomePage/TractChairHomePage';
import TractPrivateRoute from './Component/Shared/TractPrivateRoute/TractPrivateRoute';
import TractRoot from './Component/root/tractRoot';
import AdminPrivetRoute from './Component/Shared/AdminPrivetRoute/AdminPrivetRoute';
import AdminOutlet from './Component/root/AdminOutlet';
import AdminHomePage from './Pages/AdminDashboard/AdminHomePage/AdminHomePage';
import ReviewerHomePage from './Pages/ReviewerDashboard/ReviewerHomePage/ReviewerHomePage';
import ReviewerOutlet from './Component/root/ReviewerOutlet';
import AddReviewer from './Pages/TractChair/AddReviewer/AddReviewer';
import ReviewerPrivetRoute from './Component/Shared/ReviewerPrivetRoute/ReviewerPrivetRoute';
import SubmitPaperForm from './Pages/AuthorDashboard/SubmitPaperForm/SubmitPaperForm'
import AuthorInfoForSubmission from './Component/AuthorComponent/AuthorSubmitForm/AuthorInfoForSubmission';
import RequestForReviewer from './Pages/AuthorDashboard/RequestForReviewer/RequestForReviewer';
import AuthorOutlet from './Component/root/AuthorOutlet';
import { Route } from 'react-router-dom';
import {
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import AddReview from './Pages/ReviewerDashboard/AddReview/AddReview';
import ManageReviewer from './Pages/TractChair/ManageRevieweer/ManageRevieweer';
import ManageAdmin from './Pages/TractChair/ManageAdmin/ManageAdmin';
import CustomizeHomePage from './Pages/AdminDashboard/CustomizeHomePage/CustomizeHomePage';
import UpdateConferenceDate from './Pages/AdminDashboard/UpdateConferenceDate/UpdateConferenceDate';
import AssignPaperToReviewer from './Pages/TractChair/AssignPaperToReviewer/AssignPaperToReviewer';
import ManageCommittee from './Pages/TractChair/ManageCommittee/ManageCommittee';
import DisplayCommittee from './Pages/DisplayCommittee/DisplayCommittee';
const RouteJSX = (
    <>
        <>
            <Route>

                <Route path="/" element={<BasicRoute />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/dates" element={<ImportantDates />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/committee"
                        loader={({ request }) =>
                            fetch("http://localhost:8080/api/v1/create-committee", {
                                signal: request.signal,
                            })
                        }
                        element={<DisplayCommittee />} />
                </Route>

            </Route>
            <Route>
                <Route path="/author" element={<AuthorOutlet />}>

                    <Route path="/author" element={<PrivateRoute><AuthorHomePage /></PrivateRoute>} />
                    <Route path="/author/reviewer-qualification"
                        loader={({ request }) =>
                            fetch("http://localhost:8080/api/v1/reviewer", {
                                signal: request.signal,
                            })
                        }
                        element={<PrivateRoute><RequestForReviewer /></PrivateRoute>} />
                    <Route path="/author/submit-paper" element={<SubmitPaperForm />} />
                    <Route path="/author/author-form" element={<AuthorInfoForSubmission />} />
                    <Route path="/author/history" element={<PrivateRoute><Services /></PrivateRoute>} />

                </Route>
            </Route>

            <Route path="/admin" element={<AdminOutlet />}>
                <Route path='/admin/dashboard' element={<PrivateRoute><AdminPrivetRoute><AdminHomePage /></AdminPrivetRoute></PrivateRoute>}></Route>
                <Route path='/admin/admin/customize-homepage' element={<PrivateRoute><AdminPrivetRoute><CustomizeHomePage /></AdminPrivetRoute></PrivateRoute>}></Route>
                <Route path='/admin/customize-date' element={<PrivateRoute><AdminPrivetRoute><UpdateConferenceDate /></AdminPrivetRoute></PrivateRoute>}></Route>
            </Route>




            <Route>
                <Route path="/tract-chair" element={<TractRoot />}>
                    <Route path='/tract-chair'
                        loader={({ request }) =>
                            fetch(`http://localhost:8080/api/v1/submit?page=1`, {
                                signal: request.signal,
                            })
                        }
                        element={<PrivateRoute><TractPrivateRoute><TractChairHomePage /></TractPrivateRoute></PrivateRoute>}>
                    </Route>
                    <Route path='/tract-chair/tract-chair/manage-paper'
                        loader={({ request }) =>
                            fetch(`http://localhost:8080/api/v1/submit?page=1`, {
                                signal: request.signal,
                            })
                        }
                        element={<PrivateRoute><TractPrivateRoute><TractChairHomePage /></TractPrivateRoute></PrivateRoute>}>
                    </Route>

                    <Route path='/tract-chair/make-admin' element={<PrivateRoute><TractPrivateRoute><AddAdmin /></TractPrivateRoute></PrivateRoute>}>
                    </Route>
                    <Route path='/tract-chair/add-reviewer'
                        loader={({ request }) =>
                            fetch("http://localhost:8080/api/v1/reviewer", {
                                signal: request.signal,
                            })
                        }
                        element={<PrivateRoute><TractPrivateRoute><AddReviewer /></TractPrivateRoute></PrivateRoute>}>
                    </Route>
                    <Route path='/tract-chair/manage-reviewer'
                        loader={({ request }) =>
                            fetch("http://localhost:8080/api/v1/reviewer/selected-reviewer-list", {
                                signal: request.signal,
                            })
                        }
                        element={<PrivateRoute><TractPrivateRoute><ManageReviewer /></TractPrivateRoute></PrivateRoute>}>
                    </Route>
                    <Route path='tract-chair/manage-admin'
                        loader={({ request }) =>
                            fetch("http://localhost:8080/api/v1/admin/admin-list", {
                                signal: request.signal,
                            })
                        }
                        element={<PrivateRoute><TractPrivateRoute><ManageAdmin /></TractPrivateRoute></PrivateRoute>}>
                    </Route>
                    <Route path='/tract-chair/add-paper-to-reviewer/:_id'
                        loader={({ request }) =>
                            fetch("http://localhost:8080/api/v1/reviewer/selected-reviewer-list", {
                                signal: request.signal,
                            })
                        }
                        element={<PrivateRoute><TractPrivateRoute><AssignPaperToReviewer /></TractPrivateRoute></PrivateRoute>}>
                    </Route>
                    <Route path='/tract-chair/manage-committee' element={<PrivateRoute><TractPrivateRoute><ManageCommittee /></TractPrivateRoute></PrivateRoute>}>
                    </Route>
                </Route>
            </Route>



            <Route>
                <Route path="/reviewer" element={<ReviewerOutlet />}>
                    <Route path='/reviewer/dashboard'
                        loader={({ request }) =>
                            fetch(`http://localhost:8080/api/v1/submit?page=1`, {
                                signal: request.signal,
                            })
                        }
                        element={<PrivateRoute><ReviewerPrivetRoute><ReviewerHomePage /></ReviewerPrivetRoute></PrivateRoute>}>
                    </Route>


                    <Route path='/reviewer/submit-paper' element={<PrivateRoute><ReviewerPrivetRoute><SubmitPaperForm /></ReviewerPrivetRoute></PrivateRoute>}>
                    </Route>
                    <Route path='/reviewer/add-review/:_id' element={<PrivateRoute><ReviewerPrivetRoute><AddReview /></ReviewerPrivetRoute></PrivateRoute>}>
                    </Route>
                </Route>
            </Route>
        </>
    </>
);

const routes = createRoutesFromElements(RouteJSX);
const router = createBrowserRouter(routes)
export default router;

