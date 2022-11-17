import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import PaymentsIcon from '@mui/icons-material/Payments';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import '../Navbar/Navbar.css';

const Navbar = () => {
    return (
        <>
            <div id='navbar_container'>
                <div id='navbar_menu' >
                    <ul>
                    <li><DashboardIcon  id="subicon2" /> Dashboard</li>
                    <li><CalendarMonthIcon id="subicon2" /> Calander</li>
                    <li><BrandingWatermarkIcon id="subicon2" /> User Interface</li>
                    <li><PaymentsIcon id="subicon2" /> Componant</li>
                    <li><AutoStoriesIcon id="subicon2"/> Pages</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;