import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from './actions/index';
import { bindActionCreators } from 'redux';

class CreateUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      user_email: "",
      password: "",
      emailWarning: false,
      passwordWarning: false};
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
    if (props.user_email.match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
) === null){
    this.setState({emailWarning: true})
  } else if(props.password.length < 1){
    this.setState({passwordWarning: true})
  } else {
    this.props.createUser(props) }
  };

  render(){
    return (
      <div>
        <div>
        <h3>Create Account.</h3>
          <label>Email</label>
          <input type="text"
            value={this.state.user_email}
            onChange={this.onInputChangeEmail}/>
        </div>
        <h3>Select A Password.</h3>
        <div>
          <label>Password</label>
          <input type="password"
          value={this.state.password}
          onChange={this.onInputChangePassword}/>
        </div>
        <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
        <p className={this.state.emailWarning? 'alert-show' : "alert-hidden"}>Please enter a valid email address.</p>
        <p className={this.state.passwordWarning? 'alert-show' : "alert-hidden"}>Please enter a valid password.</p>
      </div>
    )
  }
}

  function mapDispatchToProps(dispatch){
    return bindActionCreators({ createUser: createUser}, dispatch)
  }


  export default connect(null, mapDispatchToProps)(CreateUser)
