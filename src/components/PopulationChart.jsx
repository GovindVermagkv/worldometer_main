import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Bar } from 'recharts'

export default function Index() {

    const [data, setData] = useState("");

   useEffect(()=>{
    let url = "https://dhis2-app-course.ifi.uio.no/api?page=2&pageSize=60"
    axios
    .get(url)
    .then((responce)=>{
        let result = responce.data.results
        setData([...result, setData])

    })
   },[])

//    console.log(data)

  const mystyle={
    margin:"auto",
    background:"#fff",
  }
    
  return (
    <div style={mystyle} >
        <h1 style={{color:"gray", textAlign:"center"}}>World Population <strong style={{color:"#1e1e1e"}}>Chart</strong></h1>
          
        <BarChart width={1200} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Country" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="PopulationGrowth" fill="#8884d8" />
        </BarChart>   
            
    </div>
  )
}