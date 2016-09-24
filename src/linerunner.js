import React, { Component } from 'react';
import Navbar from './navbar';
import ScriptDisplay from './scriptdisplay';
import PlaybackController from './playbackcontroller';
import { connect } from 'react-redux';


function mapStateToProps(state){
  return {
    session: state.session,
    lines: state.lines
  }
};

class LineRunner extends Component {
  constructor(props){
    super(props);
    this.session = this.props.session[0].user_email;
    this.lines = this.props.lines
  }
  render(){
    if (!this.lines) {
      return (
        <div className="LineRunner">
          <Navbar/>
          <h2>Click "Add New Script" to get started!</h2>
          <h2>Or click "Open Saved Script" to resume playback</h2>
          <h2>of a previously saved script.</h2>
        </div>
      )
    } else {
      return(
        <div className="LineRunner">
          <Navbar/>
          <ScriptDisplay/>
          <PlaybackController/>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps)(LineRunner);
