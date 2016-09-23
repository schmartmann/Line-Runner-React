import React, { Component } from 'react';
import UserAuthentication from './userauthentication'
import LineRunner from './linerunner'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to LineRunner</h2>
        </div>
        <div className="UserAuthentication">
          <UserAuthentication/>
        </div>
        <div className="LineRunner">
          <LineRunner/>
        </div>
      </div>
    );
  }
}

export default App;
