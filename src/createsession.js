import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSession } from './actions/index';
import { bindActionCreators } from 'redux';


class CreateSession extends Component {
  constructor(props){
    super(props)
    this.state = { user_email: "", password: ""};
    this.onInputChangePassword = this.onInputChangePassword.bind(this);
    this.onInputChangeEmail = this.onInputChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onInputChangePassword(event) {
    this.setState({ password: event.target.value});
  }
  onInputChangeEmail(event){
    this.setState({ user_email: event.target.value});
  }
  onSubmit(props){
    props = {
      user_email: this.state.user_email,
      password: this.state.password
    };
    this.props.createSession(props)
  }
  render(){
    return (
      <div>
        <div>
        <h3>Log In.</h3>
          <label>Email</label>
          <input type="text"
            value={this.state.user_email}
            onChange={this.onInputChangeEmail}/>
        </div>
        <br/>
        <div>
          <label>Password</label>
          <input type="password"
          value={this.state.password}
          onChange={this.onInputChangePassword}/>
        </div>
        <button type="submit" onClick={this.onSubmit} className="auth-col-button">Submit</button>
      </div>
    )
  }
}

  function mapDispatchToProps(dispatch){
    return bindActionCreators({ createSession: createSession}, dispatch)
  }


  export default connect(null, mapDispatchToProps)(CreateSession)
