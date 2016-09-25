import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from './actions/index';
import { bindActionCreators } from 'redux';


class CreateUser extends Component {
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
    this.props.createUser(props)
  }
  render(){
    return (
      <div>
        <div>
        <h3>User Email Address.</h3>
          <label>Email</label>
          <input type="text"
            value={this.state.user_email}
            onChange={this.onInputChangeEmail}/>
        </div>
        <h3>Select A Password.</h3>
        <div>
          <label>Password</label>
          <input type="text"
          value={this.state.password}
          onChange={this.onInputChangePassword}/>
        </div>
        <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
      </div>
    )
  }
}

  function mapDispatchToProps(dispatch){
    return bindActionCreators({ createUser: createUser}, dispatch)
  }


  export default connect(null, mapDispatchToProps)(CreateUser)
