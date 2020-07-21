// display time data from the http://worldtimeapi.org/ JSON API.

import React, { useState, useEffect } from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    minHeight: 175
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
  const [isLoading, setIsLoading] = React.useState(false);

  const [TimeData, setTimeData] = useState<IState>({datetime: '', dst: false});

  useEffect(() => {
    setIsLoading(true);
    fetch('http://worldtimeapi.org/api/timezone/' + props.SearchRegion + '/' + props.SearchCity?.replace(' ', '_')) // the API has underscores instead of spaces in place names
    .then(response => response.json())
    .then(response => {
      setTimeData(response);
      setIsLoading(false);})
    .catch(error => {
      console.log(error);
      setIsLoading(false);})
  }, [props.SearchRegion, props.SearchCity]);
  
  if (isLoading === true) {
    return(
      <Card className={classes.root} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',  
      }}>
        <CircularProgress size={80}/>
      </Card>
    )
  }
  
  if (TimeData['datetime'] === undefined || TimeData['dst'] === undefined) {
    return (
      <Card className={classes.root} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',  
      }}>
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
  )
}

export default APITime