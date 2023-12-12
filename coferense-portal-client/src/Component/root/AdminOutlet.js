import React from 'react';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import SideNavbar from '../Shared/SideNavbar/SideNavbar';
import HomeNavBar from '../Shared/HomeNavBar/HomeNavBar';

const AdminOutlet = () => {
    return (
        <div>
            <div className="row">
                <HomeNavBar />
                <div className="col-2">
                    <SideNavbar></SideNavbar>
                </div>
                <div className="col-10">
                    <Outlet />
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default AdminOutlet;