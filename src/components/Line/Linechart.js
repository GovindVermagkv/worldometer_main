import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const years = ["2015","2016","2017","2018","2019","2020","2021"] ;

  return (
    <>
      <div>
        <Chart
          type="line"
          width={550}
          height={450}
          series={newArr}
          options={{
            title: { text: "Top 5 Countries GDP from 2015 - 2021" },
            xaxis: {
              categories: years,
            },
            yaxis: {
              title: { text: "GDP Growth" },
            },
          }}
        />
         <ToastContainer /> 
      </div>
    </>
  );
};
