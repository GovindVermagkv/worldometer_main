import  {React, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import '../calender/Calender.css'

const Calender =()=> {
  const [value, onChange] = useState(new Date());

  return (
    <div id='Calender_container'>
      <Calendar onChange={onChange} value={value} id='calender'/>
    </div>
  );
}

export default Calender ;

