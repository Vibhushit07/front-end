import React, { Component } from 'react';
import Display from './Display';
import Header from './Header';
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <Display />
      </div>
    );
  }
}

export default App;
