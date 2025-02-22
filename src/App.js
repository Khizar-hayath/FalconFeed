import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5}/>
      </div>
    )
  }
}

