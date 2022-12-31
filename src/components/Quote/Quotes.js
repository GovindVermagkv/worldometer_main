import React, { useEffect, useState } from 'react' ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './quotes.css'

export const Quotes = ()=> {
    const [quotes , setQuotes] = useState("") ;
    const notify = () => toast("Error 404 not found LineChart !!");

    const getQuote = () => {
        fetch(`https://type.fit/api/quotes`)
        .then((res) => res.json())
        .then((data) => {
            let randomNum = Math.floor(Math.random() * data.length) ;
            setQuotes(data[randomNum]) ;
        })
        .catch(()=>{
          {notify()} }) 
    } ;

    useEffect(() =>{
      getQuote() ;
    }, []) ;


  return (
    <>
        <div className='quotes_container'>
          <p className='quote'> <span>"</span> {quotes.text} <span>"</span></p>
          <p className='author'>{quotes.author}</p>

        </div>
        <button className='quotes-btn' onClick={getQuote}>Next</button>
        <ToastContainer /> 
    </>
  )
}



