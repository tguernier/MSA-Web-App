// display time data from the http://worldtimeapi.org/ JSON API.

import React, { useState, useEffect } from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface IState {
  datetime: string;
  dst : boolean;
}

interface IAPITimeProps {
  SearchRegion: (string | null);
  SearchCity: (string | null);
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 4,
  },
});

function APITime(props: IAPITimeProps) {
  const classes = useStyles();

  const [TimeData, setTimeData] = useState<IState>({datetime: '', dst: false});

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone/' + props.SearchRegion + '/' + props.SearchCity?.replace(' ', '_')) // the API has underscores instead of spaces in place names
    .then(response => response.json())
    .then(response => {setTimeData(response);})
    .catch(error => {console.log(error)})
  }, [props.SearchRegion, props.SearchCity]);
  
  if (TimeData['datetime'] === undefined || TimeData['dst'] === undefined) {
    return (
      <Card className={classes.root}>
        <Typography variant="h3" component="h1">
          Invalid location!
        </Typography>
      </Card>
    )
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Current Time and Date
        </Typography>
        <Typography variant="h3" component="h1">
          It is {TimeData['datetime'].slice(11,16)} on {TimeData['datetime'].slice(0,10)} in {props.SearchCity}.
        </Typography>
        <Typography color="textSecondary">
          It <b>{TimeData['dst'] ? 'is' : 'is not'}</b> daylight saving time right now.
        </Typography>
        <Typography className={classes.pos} align='right' color="textSecondary">
          Data from <a href="http://worldtimeapi.org/"> WorldTimeAPI</a>
        </Typography>
      </CardContent>
    </Card>
    // <div>
    //   <h1>It is {TimeData['datetime'].slice(11,16)} on {TimeData['datetime'].slice(0,10)} in {props.SearchCity}.</h1>
    //   <h5>It <b>{TimeData['dst'] ? 'is' : 'is not'}</b> daylight saving time right now.</h5>
    // </div>
  )
}

export default APITime