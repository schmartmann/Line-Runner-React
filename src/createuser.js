import React, { Component } from 'react';
import { connect } from 'react-redux';
import createUser from './actions/index';
import { bindActionCreators } from 'redux';
var ErrorAlert = require('pui-react-alerts').ErrorAlert;
import axios from 'axios';

class CreateUser extends Component {
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
      console.log(this.state)
      const email = this.state.user_email;
      const password = this.state.password;
      axios({
        method: 'post',
        url: 'http://localhost:3001/users/create',
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        data: {
          email: email,
          password: password
        }
      }).then(function(response){
        if (response.data === "error!"){
          console.log(response.data)
          //somehow update the state to make create_error true.
        } else {
          console.log("the following user should have been created");
          console.log(response.data)
        }
      })
      this.setState({ user_email: '' });
      this.setState({ password: ''})
    }
    render(){
        return(
          <div className="CreateUser">
          <h3>Create Account</h3>
          <ErrorAlert dismissable className="alert-hidden">Oops! That Username/Password combo could not be created.</ErrorAlert>
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

function mapStateToProps(state){
  return {
    session: state.session
  }
};

export default connect(mapDispatchToProps, mapStateToProps)(CreateUser)
