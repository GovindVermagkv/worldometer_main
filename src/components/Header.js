import { React } from "react";
import { Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import logo from './assets/logo.jpg'
import Navbar from "./Navbar";

import "../App.css";


const Header = () => {
    return (
        <>
            <div id='header_container'>
                <div>
                    <div id="head_img"><img src={logo} alt="" /></div>
                    <div id='input_area'>
                        <input type={"text"} placeholder="Search" />
                        <EmailIcon id='icon_email' />
                        <NotificationsActiveIcon id='icon_bell' />
                        <Avatar id='icon_avtar' >GV</Avatar>
                    </div>
                </div>
                
            </div>
            <Navbar />
        </>
    )
}
export default Header;