import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateUser from './createuser';
import CreateSession from './createsession';

function mapStateToProps(state){
  return {
    session: state.session
  }
};


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
export default connect(mapStateToProps)(UserAuthentication)
