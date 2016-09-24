import React, { Component } from 'react';
import { connect } from 'react-redux';
import createUser from './actions/index';
import { bindActionCreators } from 'redux';
import axios from 'axios';


class CreateUser extends Component {
  constructor(props){
    super(props);
    // this.createUser = this.props.createUser.bind(this);
    this.state = { user_email: "", password: ""};
    this.onInputChangePassword = this.onInputChangePassword.bind(this);
    this.onInputChangeEmail = this.onInputChangeEmail.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChangePassword(event) {
    this.setState({ password: event.target.value});
  }
  onInputChangeEmail(event){
    this.setState({ user_email: event.target.value});
  }
  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    const email = this.state.user_email;
    const password = this.state.password;
    axios({
      method: 'post',
      url: 'http://localhost:3001/users/create',
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      params: {
        email: email,
        password: password
      }
    });
    this.setState({ user_email: '' });
    this.setState({ password: ''})
  }
  render(){
    return(
      <div className="CreateUser">
      <h3>Create Account</h3>
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
  return bindActionCreators({ createUser: createUser}, dispatch)
}


export default connect(mapDispatchToProps)(CreateUser)
