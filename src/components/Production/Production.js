import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../Production/Production.css'

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
                {mydata.map(({product,country,name,Pcs,price,status}) =>
                        <tr>
                            <td><img src={product} alt="" /> </td>
                            <td>{name}</td>
                            <td><img src={country} alt="" /></td>
                            <td>{Pcs}</td>
                            <td>{price}</td>
                            <td id={status}>{status}</td>

                        </tr>

                )}
                </table>

                {showtoast && toast(error) && <ToastContainer theme="dark" /> }

            </div>
        </>
    )
}

export default OrderList;