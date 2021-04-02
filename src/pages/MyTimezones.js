import React from 'react'
import AnalogClock from 'analog-clock-react';
import { Link } from 'react-router-dom';

export default function MyTimezones(props) {
  console.log(props)
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        
      </ul>
      {props.timezones.map((tz, index) =>{
        return (
          <div key={index}>
            <h2>{tz.value}</h2>
            <AnalogClock timezone={tz} />
          </div>
        );
      })}
      <h1>My Timezone Page</h1>
    </div>
  )
}
