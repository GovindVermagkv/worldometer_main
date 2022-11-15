import {React} from "react";

import Pollution from "./pollution";
import PopulationChart from "./PopulationChart";
import ExchangeRateChart from "./ExchangeRateChart";

import "../App.css";

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
                        <div><PopulationChart /></div>
                        <div>6</div>
                    </div>

                    <div id="product_order_profile">
                        <div>7</div>
                        <div> <Pollution /></div>
                        <div></div>
                    </div>

                    <div id='static_revenue'>
                        <div>10</div>
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