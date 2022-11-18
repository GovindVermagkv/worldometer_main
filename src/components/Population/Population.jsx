import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from 'react-apexcharts'

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
              id: 'apexchart-example'
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
        <Chart options={options} series={series} type="bar" width={500} height={500} />
      )
}

export default Population;


  
