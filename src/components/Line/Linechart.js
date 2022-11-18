import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export const Linechart = () => {
  const [sData, setSdata] = useState([]);
  const notify = () => toast("Error 404 not found LineChart !!");


  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/Prakash-kumar1/JSON/main/product`)
      .then((response) => {
        setSdata(response.data);
      })
      .catch(()=>{
        {notify()} }) 
  }, []);

  const newArr = [];
  sData.map((val) => {
    const obj = {};
    obj.name = val.category_title;
    obj.data = val.value;
    newArr.push(obj);
  });

  const months = [ "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",] ;

  return (
    <>
      <div>
        <Chart
          type="line"
          width={550}
          height={450}
          series={newArr}
          options={{
            title: { text: "Product sell in 2021" },
            xaxis: {
              categories: months,
            },
            yaxis: {
              title: { text: "Product in K" },
            },
          }}
        />
         <ToastContainer /> 
      </div>
    </>
  );
};
