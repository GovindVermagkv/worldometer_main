import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Chart from "react-apexcharts";

import '../App.css'

const Covid = () => {
  const [mydata, setMydata] = useState([]);
  const [error, seterror]=useState("");
  const [showtoast,setshowtoast]=useState(false)


  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/GovindVermagkv/JSON/main/coviddatam`
      )
      .then((response) => {
        setMydata(response.data);
      })
      .catch(function (error) {
        seterror("Covid data not loaded")
        error && setshowtoast(true)
      });

        

  }, []);

  const world = [];
  const data = [];
  mydata.map((val) => {
    world.push(val.series);
    data.push(+val.value);
  });


  return (
    <div id="pie_container">
      <Chart type="pie" id='piechart' series={data} options={{
          labels: world,
          title:{
                text:"World Covid Data",
             },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                },
              },
            },
          },

          dataLabels: {
            enabled: true,
          },
        }}
      />
      {showtoast && toast(error) && <ToastContainer theme="dark" /> }
    </div>
  );
}

export default Covid;