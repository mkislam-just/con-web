/* eslint-disable import/no-anonymous-default-export */
import requests from "./httpServices";
class ReviewerServices {
    getReviewer(){
        return requests.get('/reviewer');
    }
    postReviewer(body) {
        console.log(body);
        return requests.post('/reviewer', body);
    }
    postSelectedReviewer(body) {
        console.log('from ReviewerServices', body);
        return requests.post('/reviewer/selected-reviewer', body);
    }
    getReviewerByEmail(body){
        console.log('body',body);
        return requests.post('/reviewer/get-reviewer', body);
    }
    deleteReviewerById(email){
        console.log('body',email);
        return requests.delete(`/reviewer/${email}`);
    }
    deleteSelectedReviewerByEmail(email){
        console.log('body',email);
        return requests.delete(`/reviewer/reviewer-list/${email}`);
    }
}


export default  new ReviewerServices();