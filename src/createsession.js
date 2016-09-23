import React, { Component } from 'react';
import { connect } from 'react-redux';
import createSession from './actions/index';
import { bindActionCreators } from 'redux';


class CreateSession extends Component {
  constructor(props){
    super(props);
    this.state = { user_email: "", password: ""};
    this.onInputChangePassword = this.onInputChangePassword.bind(this);
    this.onInputChangeEmail = this.onInputChangeEmail.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChangePassword(event) {
  console.log(event.target.value);
  this.setState({ password: event.target.value});
  }
  onInputChangeEmail(event){
    console.log(event.target.value);
    this.setState({ user_email: event.target.value});
  }
  onFormSubmit(event) {
    event.preventDefault();
    const email = this.state.user_email;
    const password = this.state.password;
    this.props.createSession(email, password);
    this.setState({ user_email: '' });
    this.setState({ password: ''})
  }

  render(){
    return(
      <div className="CreateSession">
      <h3>Log In</h3>
      <form onSubmit={this.onFormSubmit}>
      <input
        placeholder="Enter your email"
        value={this.state.user_email}
        className="form-control"
        onChange={this.onInputChangeEmail}/><br/>
      <input
        placeholder="Enter your password"
        value={this.state.password}
        className="form-control"
        onChange={this.onInputChangePassword}/><br/>
        <button type="submit">
        Submit
      </button>
      </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ createSession: createSession}, dispatch)
}

export default connect(mapDispatchToProps)(CreateSession)
