import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import PaymentsIcon from '@mui/icons-material/Payments';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Outlet, Link } from "react-router-dom";

import '../Navbar/Navbar.css';

const Navbar = () => {
    return (
        <>
            <div id='navbar_container'>
                <div id='navbar_menu' >
                    <ul>
                        <li><Link to='/' id="dashboard"><DashboardIcon id="subicon2" /> Dashboard</Link></li>
                        <li><Link to='/' id="calender_nav"><CalendarMonthIcon id="subicon2" /> Calander </Link></li>
                        <li><Link to='/' id="user_interface"><BrandingWatermarkIcon id="subicon2" /> User Interface </Link></li>
                        <li><Link to='/about' id="components"><PaymentsIcon id="subicon2" /> About </Link></li>
                        <li><Link to='/' id="pages"><AutoStoriesIcon id="subicon2" /> Pages </Link></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar;