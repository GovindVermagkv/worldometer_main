import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function ExchangeRateChart() {
  const [exchangeData, setExchangeData] = useState("");

  useEffect(() => {
    let url = "https://open.er-api.com/v6/latest/USD";
    axios.get(url).then((responce) => {
      let result = responce.data.rates;
      setExchangeData(result);
    });
  }, []);


  // Test
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
        <LineChart width={730} height={250} data={newData}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
      </div>
    </>
  );
}
