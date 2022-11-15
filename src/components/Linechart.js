import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

export const Linechart = () => {
  const [sData, setSdata] = useState([]);

  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/Prakash-kumar1/JSON/main/product`)
      .then((response) => {
        setSdata(response.data);
      });
  }, []);

  const newArr = [];
  sData.map((val) => {
    const obj = {};
    obj.name = val.category_title;
    obj.data = val.value;
    newArr.push(obj);
  });
  console.log(newArr);

  return (
    <>
      <div>
        <h2>Line Chart- Using Apexcharts in React </h2>
        <Chart
          type="line"
          width={550}
          height={450}
          series={newArr}
          options={{
            title: { text: "Product sell in 2021" },
            xaxis: {
              categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
            yaxis: {
              title: { text: "Product in K" },
            },
          }}
        ></Chart>
      </div>
    </>
  );
};
