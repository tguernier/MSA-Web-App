// display time data from the http://worldtimeapi.org/ JSON API.

import React, { useState, useEffect } from 'react';
import '../App.css';

interface IState {
  datetime: string;
}

function APITime() {
  const [TimeData, setTimeData] = useState<IState[]>([{datetime: '' }]);

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/ip')
    .then(response => response.json())
    .then(response => {setTimeData(response.datetime);})
    .catch(error => console.log(error))
  }, []);

  console.log(TimeData.toString());

  return (
    <div>
      <h5>{TimeData.toString()}</h5>
    </div>
  )
}

export default APITime