import { React, useState } from "react";
import { Avatar } from '@mui/material';
import { Link } from "react-router-dom";
import 'animate.css';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import logo from '../assets/logo.jpg'
import Navbar from "../Navbar/Navbar";

import "../Header/Header.css";


const Header = () => {

    const [click, setClick] = useState(false);

    const Profile = () => {

        { click ? setClick(false) : setClick(true) }
    }





    return (
        <>
            <div id='header_container'>
                <div>
                    <div id="head_img"><img src={logo} alt="" /></div>
                    <div id='input_area'>
                        <input type={"text"} placeholder="Search" />
                        <EmailIcon id='icon_email' />
                        <NotificationsActiveIcon id='icon_bell' />
                        <Avatar id='icon_avtar' onClick={Profile} >GV</Avatar>

                    </div>
                </div>
                <div >
                    {click ? <div id="Profile_container" className="animate__animated animate__fadeInUp">
                        <p><Link to="login" id="profile_icon">Login</Link></p>
                        <p><Link to="register" id="register">Register</Link></p>
                        <p>Profile</p></div> : ""}
                </div>

            </div>
            <Navbar />
        </>
    )
}
export default Header;