import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../Production/Production.css'

const Richest = () => {
    const [mydata, setMydata] = useState([]);
    const [error, seterror]=useState("");
    const [showtoast,setshowtoast]=useState(false)




    useEffect(() => {
        axios.get(
                `https://raw.githubusercontent.com/Prakash-kumar1/JSON/main/RichApi`
            )
            .then((response) => {
                setMydata(response.data)
                console.log(response.data[0].series);
            })

            .catch(function (error) {
                seterror("Richest data not loaded")
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
                {mydata.map(({series,image,name,country,company,net_Worth}) =>
                        <tr>
                            <td>{series} </td>
                            <td><img src={image} alt="" /></td>
                            <td>{name}</td>
                            <td>{country}</td>
                            <td>{company}</td>
                            <td>{net_Worth}</td>

                        </tr>

                )}
                </table>

                {showtoast && toast(error) && <ToastContainer theme="dark" /> }

            </div>
        </>
    )
}

export default Richest;