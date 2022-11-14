import React,{useState, useEffect} from 'react';
import Chart from 'react-apexcharts';

function Linechart()
{
    const [sData, setSdata]= useState([]);
    useEffect( ()=>{
        const getvaluedata= async()=>{
            const newvalue=[];
            const reqData= await fetch('https://raw.githubusercontent.com/Prakash-kumar1/JSON/main/product');
            const resData= await reqData.json();
            //console.log(resData);
            for(let i=0; i < resData.length; i++)
            {
                newvalue.push({name:resData[i].category_title, data:resData[i].value });   

            }
            setSdata(newvalue);

        }
        getvaluedata();
    },[]);   

    return(<React.Fragment>
        <div>
          <h2>Line Chart- Using Apexcharts in React </h2>          
          <Chart type='line'
          width={1050}
          height={550}
          series={sData}
          options={{
            title:{ text:"Product sell in 2021"},
            xaxis:{
                // title:{text:"Product Sell in Months"},
                categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            },
            yaxis:{
                title:{text:"Product in K"}                 
            }          

        }}
          >
          </Chart>

        </div>
    </React.Fragment>);
}

export default Linechart;