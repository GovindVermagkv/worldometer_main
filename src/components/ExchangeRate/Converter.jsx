import React, { useState, useEffect } from "react";
import axios from "axios";

import "./converter.css";

export const Converter = () => {
  const [initialState, setInitialState] = useState({
    currencies: ["USD", "RUB", "EUR", "JPY", "RSD"],
    base: "USD",
    amount: "",
    convertTo: ["INR"],
    result: "",
    date: "",
  });
  const { currencies, base, amount, convertTo, result, date } = initialState;

  useEffect(() => {
    if (amount === isNaN) {
      return;
    } else {
      axios
        .get(`https://open.er-api.com/v6/latest/${base}`)
        .then((responce) => {
          const result = (responce.data.rates[convertTo] * amount).toFixed(3);
          setInitialState({
            ...initialState,
            result,
            date,
          });
        });
    }
  }, [amount, base]);

  const handleInput = (e) => {
    setInitialState({
      ...initialState,
      amount: e.target.value,
      result: null,
      date: null,
    });
  };
  const handleSelect = (e) => {
    setInitialState({
      ...initialState,
      [e.target.name]: e.target.value,
      result: null,
    });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1>Exchange Currency to Rupees..</h1>
        <div>
          <h5>
            {amount}
            {base} is equvalent to
          </h5>
          <h3>
            {amount === "" ? "0" : result === null ? "Calculating...." : result}
            {convertTo}
          </h3>
        </div>
        <div>
            <form>
              <input type="number" value={amount} onChange={handleInput} />
              <select name="base" value={base} onChange={handleSelect}>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Converter;