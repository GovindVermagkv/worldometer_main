import {React} from "react";
import { Button } from '@mui/material';

import "../Pollution/Pollution.css";

const Pollution = () => {
    return (
        <>
            <div id="pollution">
                <div>
                    <b>Environment</b>
                    <div id="order_tab"><p>Today's Performance</p>  <strong> <sup>▴</sup> 52%</strong></div>
                    <div id="range_area">
                        <div id="range_title"><p>82%</p><Button id='industrial' variant="contained">Industrial</Button><p>18%</p></div>
                        <div id="range_box"><div id="positive1"></div><div id="negetive1"></div> </div>
                    </div>
                    <div id="range_area">
                        <div id="range_title"><p>55%</p><Button id='residential' variant="contained">Residential</Button><p>45%</p></div>
                        <div id="range_box"><div id="positive2"></div><div id="negetive2"></div> </div>
                    </div>
                    <div id="range_area">
                        <div id="range_title"><p>30%</p><Button id='pending' variant="contained">vehiculer</Button><p>70%</p></div>
                        <div id="range_box"><div id="positive3"></div><div id="negetive3"></div> </div>
                    </div>
                    <div id="alert_color"><p id="alert_text1">Pollution</p><p id="alert_text2">Fresh</p></div>

                </div>
            </div>
        </>
    )
}
export default Pollution;