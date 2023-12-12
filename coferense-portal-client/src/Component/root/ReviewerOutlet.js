import React from 'react';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import items from '../../asset/FakeData/SideNavbarForReviewer.json';
import HomeNavBar from '../Shared/HomeNavBar/HomeNavBar';
import SideBarMain from '../Shared/SideNavbar/SideBarMain';

const ReviewerOutlet = () => {
    return (
        <div>
            <div className="row">
                <HomeNavBar />
                <div className="col-2">
                    <div className="sidebar">
                        {items.map((item, index) => <SideBarMain key={index} item={item} />)}
                    </div>
                </div>
                <div className="col-10">
                    <Outlet />
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default ReviewerOutlet;