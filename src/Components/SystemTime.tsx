// local system clock

import React from 'react';
import '../App.css';

type SystemTimeProps = {}
type SystemTimeState = {date: Date}

var options = {hour12: false} // 24 hour time format

class SystemTime extends React.Component<SystemTimeProps, SystemTimeState> {
  timerID: number;

  constructor(props: SystemTimeProps) {
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
      <div>
        <h1>It is {this.state.date.toLocaleTimeString('en-NZ', options)} on {this.state.date.toLocaleDateString('en-NZ')}.</h1>
      </div>
    );
  }
}

export default SystemTime;