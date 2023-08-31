import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Service from './Service';
import './Service.css'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Services = () => {

    const [filteredPaper, setFilteredPaper] = useState([]);
    const { loggedUser } = useContext(AuthContext);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/submit")
            .then(res => res.json())
            .then(data => {
                const myData = data?.data.filter(d => d?.email === loggedUser?.email)
                console.log('mydata:', myData)
                setFilteredPaper(myData)
            })
    }, [loggedUser.email])
    return (

        <div className='container'>
            <div className="serviceBG py-5">
                <div className="container">
                    <h1 className="text-center my-5">History</h1>
                    <div className="row gap-3">
                        {
                            filteredPaper.map(sr => <Service service={sr}></Service>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;