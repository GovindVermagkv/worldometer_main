import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

export const Donutchart = () => {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/Prakash-kumar1/JSON/main/testModel`
      )
      .then((response) => {
        setMydata(response.data);
      });
  }, []);

  const country = [];
  const medal = [];
  mydata.map((value) => {
    country.push(value.country);
    medal.push(+value.medals);
  });


  return (
    <div>
      <h2>Donut Chart of Olympics</h2>
      <Chart
        type="donut"
        width={430}
        height={650}
        series={medal}
        options={{
          labels: country,
          title: {
            text: "Medal Country Name",
          },

          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    show: true,
                    showAlways: true,
                    fontSize: 20,
                    color: "#f90000",
                  },
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


