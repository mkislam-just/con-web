/* eslint-disable import/no-anonymous-default-export */
import requests from "./httpServices";

class AdminServices {
    getAdmin(){
        return requests.get('/admin');
    }
    postAdmin(body) {
        console.log(body);
        return requests.post('/admin', body);
    }
    getByEmail(body){
        console.log(body);
        return requests.post('/admin/get-admin', body);
    }
    RemoveAdminByEmail(email){
        console.log('body',email);
        return requests.delete(`/admin/admin-list/${email}`);
    }
    postHomeMassage(body) {
        console.log(body);
        return requests.post('/admin/home-content', body);
    }
}


export default  new AdminServices();