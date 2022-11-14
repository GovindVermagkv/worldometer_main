import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function ExchangeRateChart() {
  const [exchangeData, setExchangeData] = useState("");
//   const [db,setdb] = useState();


  useEffect(() => {
    let url = "https://open.er-api.com/v6/latest/USD";
    axios.get(url).then((responce) => {
      let result = responce.data.rates;
      setExchangeData(result);
    });
  }, []);


  const newData = [];
  Object.keys(exchangeData).forEach((ele) => {
    let temp = {};
    temp.name = ele;
    temp.value = exchangeData[ele];
    newData.push(temp);
  });



  return (
    <>
      <div>
        <h1>Exchange Rates</h1>
        <AreaChart
          width={730}
          height={250}
          data={newData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </>
  );
}
