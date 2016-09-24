import React, { Component } from 'react';
import Navbar from './navbar';
import ScriptDisplay from './scriptdisplay';
import PlaybackController from './playbackcontroller';
import { connect } from 'react-redux';

class LineRunner extends Component {
  render(){
    if (!this.props.session[0].project) {
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

function mapStateToProps(state){
  return {
    session: state.session
  }
};

export default connect(mapStateToProps)(LineRunner);
