import React, { Component } from 'react';

class CreateUser extends Component {
  render(){
    return(
      <div className="CreateUser">
        <h3>Create User Account</h3>
        <form>
          <input type="text" name="email" value="Enter your email"/><br/>
          <input type="text" name="password" value="Select password"/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default CreateUser;
