import React, { useState,} from 'react';
import './App.css';
import Template from './components/template';
import Nav from './components/nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Webcam_block from './components/Webcam'
function App() {  
  return (
    <Router>
      <div className="App">
        <Nav/>

        <Switch>
          <Route path="/" exact component= {Home}/>
          <Route path="/user/:firstName" component={Template}  />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
