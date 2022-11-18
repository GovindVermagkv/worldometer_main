import { React } from "react";
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

import Pollution from "../Pollution/pollution";
import Covid from "../Covid/Covid";
import OrderList from "../Production/Production";
import Calender from "../calender/Calender";
import Footer from "../Footer/Footer" ;
import {Donutchart} from "../Donut/Donutchart" ;
import { Quotes } from "../Quote/Quotes";
import { Linechart } from "../Line/Linechart";
import "../Main/Main.css";

const Main = () => {
    return (
        <>
            <div id='main_container'>
                <div>
                    <div id="dashboard">
                        <h3>Dashboard</h3><p>PPG / Dashboard</p>
                    </div>

                    <div id="main_super_div">
                        <div> <DonutSmallIcon id='subicon' /> <div id='subicon_text'><h3>18090</h3><p>Visit Today</p></div></div>
                        <div> <GroupAddIcon id='subicon' /> <div id='subicon_text'><h3>526</h3><p>New User</p></div></div>
                        <div> <BorderColorIcon id='subicon' /> <div id='subicon_text'><h3>7514</h3><p>New Order</p></div></div>
                        <div> <LoyaltyIcon id='subicon' /> <div id='subicon_text'><h3>$35342</h3><p>Total Sales</p></div></div>
                    </div>

                    <div id='static_revenue'>
                        <div></div>
                        <div><Linechart/> </div>
                    </div>

                    <div id="product_order_profile">
                        <div><Donutchart/></div>
                        <div><Pollution /></div>
                        <div><Covid /></div>
                    </div>

                    <div id='static_revenue'>
                        <div><OrderList /></div>
                        <div></div>
                    </div>

                    <div id="calander_world">
                        <div id="side_div">
                            <div id="one"><Quotes/></div>
                            <div id="two"><Calender /></div>
                        </div>
                        <div>14</div>
                    </div>

                </div>
            </div>
            <Footer />

        </>
    )
}
export default Main;