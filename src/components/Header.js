import { React } from "react";
import { Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import logo from './assets/logo.jpg'
import Navbar from "./Navbar";

import "../App.css";
import { blue } from "@mui/material/colors";

const Header = () => {
    return (
        <>
            <div id='header_container'>
                <div>
                    <div id="head_img"><img src={logo}  /></div>
                    <div id='input_area'>
                        <input type={"text"} placeholder="Search" />
                        <EmailIcon style={{ color: "black" }} />
                        <NotificationsActiveIcon />
                        <Avatar sx={{ bgcolor: blue[500] }}>GV</Avatar>
                    </div>
                </div>
                
            </div>
            <Navbar />
        </>
    )
}
export default Header;