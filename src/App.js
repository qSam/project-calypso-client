import React, { Component } from 'react';
import './App.css';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App well">
        <Header />
        <div className="App-header">
          <h3>Welcome to Project Calypso</h3>
        </div>
        <hr />
        {this.props.children}
      </div>

    );
  }
}

export default App;
