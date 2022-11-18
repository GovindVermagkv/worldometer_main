import {React} from "react";

import Pollution from "../Pollution/pollution";
import Population from "../Population/Population"
import RichestPerson from "../RichestPerson/RichestPerson"
import WorldMap from "../Worldmap/WorldMap";
import Converter from "../ExchangeRate/Converter"

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
                        <div><Population/></div>
                        <div>6</div>
                    </div>

                    <div id="product_order_profile">
                        <div>7</div>
                        <div> <Pollution /></div>
                        <div>9</div>
                    </div>

                    <div id='static_revenue'>
                        <div>10</div>
                        <div><RichestPerson /></div>
                    </div>

                    <div id="calander_world">
                        <div id="side_div">
                            <div id="one">12</div>
                            <div id="two"><Converter /></div>
                        </div>
                        <div><WorldMap/></div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Main;