import {React} from "react";

import Pollution from "./pollution";
import {Linechart} from "./Linechart";
import {Donutchart} from "./Donutchart";



import "../App.css";
import { OrderList } from "./OrderList";


const Main = () => {
    return (
        <>
            <div id='main_container'>
                <div>
                    <div id="dashboard">
                    <h3>Dashboard</h3><p>PPG / Dashboard</p> 
                    </div>

                    <div id="main_super_div">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>

                    <div id='static_revenue'>
                       <div>5</div>
                        <div> <Linechart/> </div>
                        {/* <div> </div> */}
                    </div>

                    <div id="product_order_profile">
                        <div><Donutchart/> </div>
                        <div><Pollution/> </div>
                        <div> 9 </div>
                    </div>

                    <div id='static_revenue'>
                        <div> <OrderList/> </div>
                        <div>11</div>
                    </div>

                    <div id="calander_world">
                        <div id="side_div">
                            <div id="one">12</div>
                            <div id="two">13</div>
                        </div>
                        <div>14</div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Main;