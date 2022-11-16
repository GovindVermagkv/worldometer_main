import React, { useEffect, useState } from "react";
import axios from "axios";

export const OrderList = ()=> {
    const [mydata, setMydata] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/Prakash-kumar1/JSON/main/orderApi`
      )
      .then((response) => {
        setMydata(response.data);
        // console.log(response.data);
      });
  }, []);



  return (
    <>
        <h1>Order list </h1>


    {mydata.map((val)=>{
    // console.log(val) ;
    const {product , name , country } = val 
    console.log(product) ;

})}   
<table class="tg">
<thead>
  <tr>
    <th >Product</th>
    <th>Name</th>
    <th >Country</th>
   
  </tr>
</thead>
<tbody>
  <tr>
    {/* <td >{product}</td>
    <td >{name}</td>
    <td>{country}</td> */}
</tr>
</tbody>
</table>

   
   </>
  )
}


