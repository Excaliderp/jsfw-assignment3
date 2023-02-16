
import React, { useState, useEffect } from 'react';
import { parseISO, intervalToDuration } from 'date-fns';

const Countdown = () => {
  const [untilBirtday, setUntilBirthday] = useState({})

  useEffect(() => {
    const intervalID = setInterval(() => {
      const birthday = parseISO("2024-11-08T00:00:00")
      const interval = intervalToDuration({
        start: new Date(),
        end: birthday
      })
      setUntilBirthday(interval)
    }, 1000)

    return () => {
      clearInterval(intervalID);
    }
  }, []);

  return (
    <div>
      {untilBirtday.months} months<br/>
      {untilBirtday.days} days<br/>
      {untilBirtday.hours} hours<br/>
      {untilBirtday.minutes} minutes<br/> 
      {untilBirtday.seconds} seconds
    </div>
  );
};
export default Countdown;
