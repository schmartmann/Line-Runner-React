import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserAuthentication from './userauthentication'
import LineRunner from './linerunner'
import './App.css';

class App extends Component {
  render() {
    if (!this.props.session) {
      return(
        <div className="App">
          <div className="App-header">
            <h2>Welcome to LineRunner</h2>
          </div>
          <div className="UserAuthentication">
            <UserAuthentication/>
          </div>
        </div>
      )
    } else {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to LineRunner</h2>
        </div>
        <div className="LineRunner">
          <LineRunner/>
        </div>
      </div>
    )};
  }
}

function mapStateToProps(state){
  return {
    session: state.session
  }
};

export default connect(mapStateToProps)(App);
