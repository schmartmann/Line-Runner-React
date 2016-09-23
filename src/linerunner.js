import React, { Component } from 'react';
import Navbar from './navbar';
import ScriptDisplay from './scriptdisplay';
import PlaybackController from './playbackcontroller';

class LineRunner extends Component {
  render(){
    return(
      <div className="LineRunner">
        <Navbar/>
        <ScriptDisplay/>
        <PlaybackController/>
      </div>
    )
  }
}

export default LineRunner;
