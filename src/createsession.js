import React, { Component } from 'react';
import { connect } from 'react-redux';
import createSession from './actions/index';
import { bindActionCreators } from 'redux';
import axios from 'axios';


class CreateSession extends Component {
  constructor(props){
    super(props);
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
    const email = this.state.user_email;
    const password = this.state.password;
    axios({
      method: 'post',
      url: `http://localhost:3001/sessions/create`,
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      data: {
        email: email,
        password: password
      }
    }).then(function(response){
      if (response.data === "error!"){
        console.log(response.data)
      } else {
        console.log("this should create a session")
      }
    })
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

function mapStateToProps(state){
  return {
    session: state.session
  }
};

export default connect(mapDispatchToProps, mapStateToProps)(CreateSession)
