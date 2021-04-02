import React, { useEffect, useState } from 'react';
import TimezoneSelect from 'react-timezone-select';
import AnalogClock from 'analog-clock-react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  const [timezone, setTimezone] = useState('');
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  /**
   * @param {Event} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setTimezones([...props.timezones,timezone]);
  };

  useEffect(() => {
    // function to update clock
    const updateClock = () => {
      // get a time string for the current timezone eg. '2021-04-01 15:09:00'
      // this is built-in to javascript
      const timeString = new Date().toLocaleString('en-US', {
        timeZone: timezone.value, // timezone.value comes from
      });
      // convert string back to a date object
      const dateTime = new Date(timeString);
      // update time in state by getting values from Date object
      setTime({
        hours: dateTime.getHours(),
        minutes: dateTime.getMinutes(),
        seconds: dateTime.getSeconds(),
      });
    };

    // set up an interval and store the reference in a variable
    const interval = setInterval(() => {
      // update the clock
      updateClock();
    }, 1000); // 1000ms = 1s

    // by returning a function, this is run on clean up
    return () => {
      // stop the interval so that it doesn't keep running in background
      clearInterval(interval);
    };
  }, [timezone]);

  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/timezones'>My Timezones</Link></li>
      </ul>
      <form onSubmit={handleSubmit}>
        <TimezoneSelect value={timezone} onChange={setTimezone} />
        <button type="submit">Save</button>
      </form>
      {timezone && <AnalogClock useCustomTime {...time} />}
    </div>
  );
}