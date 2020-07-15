import React from 'react';
import Button from '@material-ui/core/Button';

import './App.css';

function Welcome(props: { name: React.ReactNode; }) {  
  return <h1>Hello, {props.name}</h1>;
}

type AppProps = {}
type AppState = {date: Date}

class Clock extends React.Component<AppProps, AppState> {
  timerID: number;

  constructor(props: AppProps) {
    super(props);
    this.state = {date: new Date()}; 
    this.timerID = 0; 
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(),1000); // sets length of a tick (1000 ms)
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {    
    this.setState({date: new Date()});  
  }

  render() {
    return (
      <Button variant="contained" color="primary">
        It is {this.state.date.toLocaleTimeString()}.
      </Button>
    );
  }
}

function App() {
  return (
    <div>
      <Welcome name="Tom" />
      <Clock />
    </div>
  );
}

export default App;
