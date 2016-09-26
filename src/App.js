import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from './actions/index';
import { bindActionCreators } from 'redux';
import UserAuthentication from './userauthentication'
import LineRunner from './linerunner'
import { Navbar } from 'react-materialize'
import './App.css';

function mapStateToProps(state){
  return {
    session: state.session,
    lines: state.lines
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logOut: logOut}, dispatch)
}

class App extends Component {
  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
  }
  logOut(){
    this.props.logOut()
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
              <nav className="nav-items">
                <h2>Welcome to LineRunner</h2>
                <ul>
                  <li>Welcome, {this.props.session.user_email}</li>
                  <li onClick={this.logOut} className="log-out">Log Out</li>
                </ul>
              </nav>
            </div>
            <div className="LineRunner">
              <LineRunner data={this.lines}/>
            </div>
          </div>
        )
      };
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
