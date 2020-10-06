import React from 'react';
import logo from './logo.svg';
import Login from './pages/login'
import Drive from './pages/drive'
import {Route,Link, Router} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div style={{fontFamily:'Century Gothic'}} className="App">
      <Route exact path="/login" component={Login}/>
      <Route exact path="/" component={Drive}/>
    </div>
  );
}

export default App;
