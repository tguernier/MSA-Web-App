import React, {useState} from 'react';
import SystemTime from './Components/SystemTime';
import APITime from './Components/APITime';
import LocationSelectBar from './Components/LocationSelectBar';
import { IUserInput } from './Common/Interfaces';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

import './App.css';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

function Welcome(props: { name: React.ReactNode; }) {  
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchRegion: 'Pacific',
    SearchCity: 'Auckland'
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }

  return (
    <div>
      <LocationSelectBar SetUserInput = {(a: IUserInput) => SetUserInput(a)}/>
      <Welcome name="User" />
      <APITime />
    </div>
  );
}

export default App;
