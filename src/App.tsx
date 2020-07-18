import React from 'react';
import Button from '@material-ui/core/Button';
import SystemTime from './Components/SystemTime';
import APITime from './Components/APITime';

import './App.css';

function Welcome(props: { name: React.ReactNode; }) {  
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="User" />
      <SystemTime />
      <APITime />
    </div>
  );
}

export default App;
