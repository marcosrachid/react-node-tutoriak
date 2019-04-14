import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rachid from './Rachid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Meu projeto em React
          </p>
          <Rachid></Rachid>
        </header>
      </div>
    );
  }
}

export default App;

