// display time data from the http://worldtimeapi.org/ JSON API.

import React, { useState, useEffect } from 'react';
import '../App.css';

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
    .catch(error => {console.log(error)})
  }, [props.SearchRegion, props.SearchCity]);
  
  if (TimeData['datetime'] === undefined || TimeData['dst'] === undefined) {
    return (
      <div>
        <h1>Invalid location!</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>It is {TimeData['datetime'].slice(11,16)} on {TimeData['datetime'].slice(0,10)} in {props.SearchCity?.replace('_', ' ')}.</h1>
      <h5>It <b>{TimeData['dst'] ? 'is' : 'is not'}</b> daylight saving time right now.</h5>
    </div>
  )
}

export default APITime