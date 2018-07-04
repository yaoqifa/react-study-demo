import React, { Component } from 'react';
// import name from './test'
import logo from './logo.svg';
import './App.css';

const arr = [
  <h1 key="aaa">aaa</h1>,
  <h1 key="bbb">bbb</h1>
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {arr}
        </div>
      </div>
    );
  }
}

export default App;
