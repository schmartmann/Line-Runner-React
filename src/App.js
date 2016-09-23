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
          {console.log(this.props.session)}
          <LineRunner/>
        </div>
      </div>
    )};
  }
}

function mapStateToProps(state){
  if (state.session[0].user_email){
    return {
      session: state.session
    }
  } else {
    return {
    }
  }
};

export default connect(mapStateToProps)(App);
