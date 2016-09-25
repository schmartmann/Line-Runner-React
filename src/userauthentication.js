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
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <h3>
          To begin, either create an account, or log in.
        </h3>
        <h4 className={this.props.session.createAccountFailure? 'alert-show' : "alert-hidden"}>Oops! There was problem with that email. Please try again!</h4>
        <CreateUser/>
          <h4 className={this.props.session.loginFailure? 'alert-show' : "alert-hidden"}>Oops! There was a problem with that email/password combo!</h4>
          {console.log(this.props)}
        <CreateSession/>
      </div>
    )
  }
}
export default connect(mapStateToProps)(UserAuthentication)
