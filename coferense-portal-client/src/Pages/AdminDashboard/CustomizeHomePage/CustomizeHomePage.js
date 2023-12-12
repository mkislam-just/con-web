import React from 'react';
import adminServices from '../../../Services/makeAdmin';
import Swal from 'sweetalert2';

const CustomizeHomePage = () => {
    const handleSubmit = async (event) =>{
       event.preventDefault();
        const form = event.target
        const homePageMassage = form.homeContent.value;
        const content ={
            homePageMassage
        }


        const res = await adminServices.postHomeMassage(content)
        if(res){
            Swal.fire(
                'Uploaded!',
                'Successfully Submitted!',
                'success'
            )
            form.homeContent.value = '';
        }
        
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} class="ml-auto mr-auto mb-3">
                <label for="inputMassage" class="form-label  text-dark"><strong>Customize HomePage :</strong>
                </label>
                <section className='container px-5'>
                    <textarea required="" name="homeContent" type="text" class="form-control" id="inputMassage" placeholder="Your Massage" style={{ height: "250px" }}>
                    </textarea>
                </section>
                <div class="text-end my-4">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CustomizeHomePage;