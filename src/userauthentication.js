import React, { Component } from 'react';
import CreateUser from './createuser';
import CreateSession from './createsession';


class UserAuthentication extends Component {
  render(){
    return(
      <div>
        <h3>
          To begin, either create an account, or log in.
        </h3>
        <CreateUser/>
        <CreateSession/>
      </div>
    )
  }
}


export default UserAuthentication;
