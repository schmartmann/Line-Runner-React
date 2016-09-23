import React, { Component } from 'react';
import { connect } from 'react-redux';
import createSession from './actions/index';
import { bindActionCreators } from 'redux';


class CreateSession extends Component {
  render(){
    return(
      <div className="CreateSession">
      <h3>Log In</h3>
      <form>
        <input type="text" name="email" value="Enter your email"/><br/>
        <input type="text" name="password" value="Enter password"/><br/>
        <input type="submit" onClick={ () => this.props.createSession()}/>
      </form>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ createSession: createSession}, dispatch)
}

export default connect(mapDispatchToProps)(CreateSession)
