import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../App.css'

const OrderList = () => {
    const [mydata, setMydata] = useState([]);
    const [error, seterror]=useState("");
    const [showtoast,setshowtoast]=useState(false)




    useEffect(() => {
        axios
            .get(
                `https://raw.githubusercontent.com/Prakash-kumar1/JSON/main/orderApi`
            )
            .then((response) => {
                setMydata(response.data);
            })

            .catch(function (error) {
                seterror("Production data not loaded")
                error && setshowtoast(true)
              })



    }, []);



    return (
        <>
            <div id='production_container' >
            <table>
            <tr>
                <th>Product</th>
                <th>Pro. Name</th>
                <th>Country</th>
                <th>Pcs.</th>
                <th>Price</th>
                <th>Status</th>
            </tr>
                {mydata.map((value) =>
                        <tr>
                            <td><img src={value.product} alt="" /> </td>
                            <td>{value.name}</td>
                            <td><img src={value.country} alt="" /></td>
                            <td>{value.Pcs}</td>
                            <td>{value.price}</td>
                            <td id={value.status}>{value.status}</td>

                        </tr>

                )}
                </table>

                {showtoast && toast(error) && <ToastContainer theme="dark" /> }

            </div>
        </>
    )
}

export default OrderList;