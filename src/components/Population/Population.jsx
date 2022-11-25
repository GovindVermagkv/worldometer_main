import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from 'react-apexcharts';

import './Population.css'

const Population = ()=>{

    const [options, setOptions] =useState({
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: []
        }
    })

    const [series, setSeries] = useState([{
        name: 'Population',
        data: []
      }]

    )

    useEffect(()=>{
      const country=[];
      const population =[];
      const url = `https://raw.githubusercontent.com/puranchandralohar/apis/main/top10country.json`
      axios
      .get(url)
      .then((responce)=>{
          let result = responce.data;
          result.map((item)=>{
            country.push(item.country)
            population.push(item.population)
          })
          setOptions({
            chart: {
              id: 'population-chart'
            },
            dataLabels: {
              enabled: false
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: false,
              }
            },
            xaxis: {
              categories: country
            }
        })
        setSeries([{
          name: 'Population',
          data: population
        }])

        })
      },[])

      return (
        <div id='population_container'>
          <Chart options={options} series={series} type="bar" id='chart_population'/>
        </div>
        
      )
}

export default Population;


  
