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
    console.log(props)
    this.session = this.props.user_email;
    this.lines = this.props.lines
  }
  render(){
      return (
        <div className="LineRunner">
          <Navbar/>
          <div className="LineRunner">
            <ScriptDisplay/>
            <PlaybackController/>
          </div>
        </div>
      )
    }
  }

export default connect(mapStateToProps)(LineRunner);
