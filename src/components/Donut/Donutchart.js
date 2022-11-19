import { React, useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Donutchart = () => {
  const [mydata, setMydata] = useState([]);
  const notify = () => toast("Error 404 not found DonutChart !!");

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/Prakash-kumar1/JSON/main/testModel`
      )
      .then((response) => {
        setMydata(response.data);
      })
      .catch(() => {
        {
          notify();
        }
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
      <ToastContainer />
    </div>
  );
};
