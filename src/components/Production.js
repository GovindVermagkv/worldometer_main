import React, { useEffect, useState } from "react";
import axios from "axios";

import '../App.css'

const OrderList = () => {
    const [mydata, setMydata] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://raw.githubusercontent.com/Prakash-kumar1/JSON/main/orderApi`
            )
            .then((response) => {
                setMydata(response.data);
                console.log(response.data);
            });
    }, []);



    return (
        <>
            <div id='production_container' >

                {mydata.map((value) =>

                    <> 
                        <div><img src={value.product} /> </div>
                        <div>{value.name}</div>
                        <div><img src={value.country} /></div>
                        <div>{value.pcs}</div>
                        <div>{value.$}</div>
                        <div>{value.status}</div>

                    </>


                )}
            </div>
        </>
    )
}

export default OrderList;