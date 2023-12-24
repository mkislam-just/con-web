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
    UpdateHomeMassage(body) {
        console.log(body);
        return requests.patch('/admin/home-content', body);
    }
    UpdateDate(body) {
        console.log(body);
        return requests.patch('/admin/update-date', body);
    }

}


export default  new AdminServices();