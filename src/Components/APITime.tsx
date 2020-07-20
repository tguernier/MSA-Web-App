// display time data from the http://worldtimeapi.org/ JSON API.

import React, { useState, useEffect } from 'react';
import '../App.css';

var options = {hour12: false} // 24 hour time format

interface IState {
  datetime: string;
  dst : boolean;
}

function APITime() {
  const [TimeData, setTimeData] = useState<IState>({datetime: '', dst: false});

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/ip')
    .then(response => response.json())
    .then(response => {setTimeData(response);})
    .catch(error => console.log(error))
  }, []);

  var DateTime = new Date(TimeData['datetime']);
  console.log(DateTime);
 
  return (
    <div>
      <h1>It is {DateTime.toLocaleTimeString('en-NZ', options)} on {DateTime.toLocaleDateString('en-NZ')}</h1>
      <h5>Is it DST?: {TimeData['dst'].toString()}</h5>
    </div>
  )
}

export default APITime