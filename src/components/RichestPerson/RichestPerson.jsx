import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import "./richestperson.css";
import "react-toastify/dist/ReactToastify.css";

const RichestPerson = () => {
  const [data, setData] = useState([]);

  const notify = () =>
    toast("Data Not Found", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/puranchandralohar/apis/main/RichestPerson.json";
    axios
      .get(url)
      .then((response) => {
        let result = response.data;
        setData(result);
      })
      .catch({ notify });
  }, []);

  return (
    <>
      <div className="person_data_container">
        <h2>Top 5 Richest Person in the World</h2>
        <table>
          <thead>
            <tr>
              <th>Person</th>
              <th>Rank</th>
              <th>Name</th>
              <th>Source</th>
              <th>Net Worth</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ rank, image, name, country, source, finalWorth }) => {
              return (
                <tr>
                  <td>
                    <img src={image} alt='' />
                  </td>
                  <td>
                    <p>{rank}</p>
                  </td>
                  <td>
                    <p>{name}</p>
                  </td>
                  <td>
                    <p>{source}</p>
                  </td>
                  <td>
                    <p>${finalWorth}B</p>
                  </td>
                  <td>
                    <p>{country}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default RichestPerson;
