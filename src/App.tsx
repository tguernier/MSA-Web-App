import React, {useState} from 'react';
import APITime from './Components/APITime';
import LocationSelectBar from './Components/LocationSelectBar';
import { IUserInput } from './Common/Interfaces';
import {createMuiTheme, Typography} from '@material-ui/core';

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
      <APITime SearchRegion={UserInput.SearchRegion} SearchCity={UserInput.SearchCity}/>
      <Typography color="textSecondary">
        This app was made by <a href='https://github.com/tguernier'>Tom Guernier</a> for the <a href='https://nzmsa.netlify.app'> Microsoft Student Accelerator Programme</a> 2020.
      </Typography>
    </div>
  );
}

export default App;
