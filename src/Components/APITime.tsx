// display time data from the http://worldtimeapi.org/ JSON API.

import React, { useState, useEffect } from 'react';
import '../App.css';

var options = {hour12: false} // 24 hour time format

interface IState {
  datetime: string;
  dst : boolean;
}

interface IAPITimeProps {
  SearchRegion: (string | null);
  SearchCity: (string | null);
}

function APITime(props: IAPITimeProps) {
  const [TimeData, setTimeData] = useState<IState>({datetime: '', dst: false});

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone/' + props.SearchRegion + '/' + props.SearchCity)
    .then(response => response.json())
    .then(response => {setTimeData(response);})
    .catch(error => console.log(error))
  }, [props.SearchRegion, props.SearchCity]);

 
  return (
    <div>
      <h1>It is {TimeData['datetime'].slice(0,10)} on {TimeData['datetime'].slice(11,19)}</h1>
      <h5>Is it DST?: {TimeData['dst'].toString()}</h5>
    </div>
  )
}

export default APITime