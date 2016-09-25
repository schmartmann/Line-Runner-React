import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserAuthentication from './userauthentication'
import LineRunner from './linerunner'
import './App.css';

function mapStateToProps(state){
  return {
    session: state.session,
    lines: state.lines
  }
}
class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
      if (!this.props.session.user_email) {
        console.log(this.props.session.user_email)
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
        console.log(this.props)
        return (
          <div className="App">
            <div className="App-header">
              <h2>Welcome to LineRunner</h2>
            </div>
            <div className="LineRunner">
              <LineRunner data={this.lines}/>
            </div>
          </div>
        )
      };
    }
}

export default connect(mapStateToProps)(App);
