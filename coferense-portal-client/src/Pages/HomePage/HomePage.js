import React, { useState } from 'react';
import Carousel from '../../Component/Home/Carousel/Carousel';
import HomeContent from '../../Component/Home/HomeContent/HomeContent';
import SideBar from '../../Component/Shared/SideBar/SideBar';
import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
    const loadedInfo = useLoaderData();
    const [HomePageMassage, setHomePageMassage] = useState(loadedInfo.data[0]);
    return (
        <div>
            <div>
                <Carousel />
            </div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-9'>
                        {HomePageMassage.content}
                        
                    </div>
                    <div className='col-md-3 border border-bottom-0 border-end-0 h-75 align-items-center p-0'>
                        <SideBar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;