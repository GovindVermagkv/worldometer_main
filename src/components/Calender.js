import  {React, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import '../App.css'

const Calender =()=> {
  const [value, onChange] = useState(new Date());

  return (
    <div id='Calender_container'>
      <Calendar onChange={onChange} value={value} id='calender' width={680}/>
    </div>
  );
}

export default Calender ;

