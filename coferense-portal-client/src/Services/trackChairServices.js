/* eslint-disable import/no-anonymous-default-export */
import requests from "./httpServices";
class TrackServices {

    updatePaperAssigningReviewer(id,body) {
        console.log(id,body);
        return requests.patch(`reviewer/${id}`, body);
    };
    getPaperById(id){
        console.log('id',`http://localhost:8080/api/v1/submit/${id}`);
        return requests.get(`submit/${id}`);
    }
    
}


export default  new TrackServices();