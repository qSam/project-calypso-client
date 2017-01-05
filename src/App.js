import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to Project Calypso</h3>
        </div>
        {this.props.children}
      </div>

    );
  }
}

export default App;
