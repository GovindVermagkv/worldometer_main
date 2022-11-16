import React, { useEffect, useState } from "react";
import axios from "axios";

import Chart from "react-apexcharts";

import '../App.css'

const Covid = () => {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/GovindVermagkv/JSON/main/coviddatam`
      )
      .then((response) => {
        setMydata(response.data);
      });
  }, []);

  const world = [];
  const data = [];
  mydata.map((val) => {
    // console.log(val);
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
    </div>
  );
}

export default Covid;