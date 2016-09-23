import React, { Component } from 'react';

class CreateSession extends Component {
  render(){
    return(
      <div className="CreateSession">
      <h3>Log In</h3>
      <form>
        <input type="text" name="email" value="Enter your email"/><br/>
        <input type="text" name="password" value="Enter password"/><br/>
        <input type="submit"/>
      </form>
      </div>
    )
  }
}

export default CreateSession;
