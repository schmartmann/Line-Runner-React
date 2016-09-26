import React, { Component } from 'react';
var createFragment = require('react-addons-create-fragment');
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
    session: state.session,
    lines: state.lines
  }
};
class ScriptLine extends Component {
  constructor(props){
    super(props);
    this.state = {
      playBackIsRunning: false
    }
    this.session = this.props.session.user_email;
    this.lines = this.props.lines;
    this.vocalize = this.vocalize.bind(this);
    this.vocalizePause = this.vocalizePause.bind(this);
    this.vocalizeResume = this.vocalizeResume.bind(this);
  }
  vocalize(){
    console.log(this.refs)
    this.setState({playBackIsRunning: true})
    for (var ref in this.refs) {
        responsiveVoice.speak(this.refs[ref].innerText, "UK English Female", {pitch: 0.7, rate:1, volume: 0.7});
    }
  }
  vocalizePause(){
    this.setState({playBackIsRunning: false})
    responsiveVoice.pause();
  }
  vocalizeResume(){
    this.setState({playBackIsRunning: true})
    responsiveVoice.resume();
  }
  renderList(){
    if (this.lines.line[0]==="Select 'Add New Script' to get started."){
      return (
        <div className="text-container">
          {/* <p className="script-text" onClick={this.vocalize.bind(this)}>
              {this.props.lines.line[0]}
          </p> */}
          <p className="script-text" ref="text-1" onClick={this.vocalize.bind(this)}>
              EXT. ROOFTOP - NIGHT
          </p>
          <p className="script-text" ref="text-2" onClick={this.vocalize.bind(this)}>
              Rain streams down Roy Batty's face as he crouches next to Deckard.
          </p>
          <p className="script-text" ref="text-3" onClick={this.vocalize.bind(this)}>
              ROY:
          </p>
          <p className="script-text" ref="text-4" onClick={this.vocalize.bind(this)}>
              I've... seen things you people wouldn't believe.
          </p>
          <p className="script-text" ref="text-5" onClick={this.vocalize.bind(this)}>
              Attack ships on fire off the shoulder of Orion.
          </p>
          <p className="script-text" ref="text-6" onClick={this.vocalize.bind(this)}>
              I watched C beams glitter in the dark near the Tanhauser Gate.
          </p>
          <p className="script-text" ref="text-7" onClick={this.vocalize.bind(this)}>
              All those moments... will be lost in time.
          </p>
          <p className="script-text" ref="text-8" onClick={this.vocalize.bind(this)}>
              Like tears in rain.
          </p>
          <p className="script-text" ref="text-9" onClick={this.vocalize.bind(this)}>
              Time to die.
          </p>
        </div>
      )
    } else {
      var lines;
        return (
          <div className="text-container">
            lines = createFragment({
              this.lines.line[0]
            });
          </div>
        )
    }
  }
  render(){
    return(
      <div className="ScriptLine">
        <div className="play-controller">
          <button onClick={this.vocalize.bind(this)}>
            Play
          </button>
          <button onClick={this.state.playBackIsRunning? this.vocalizePause : this.vocalizeResume}>
            {this.state.playBackIsRunning? "Pause" : "Resume"}
          </button>
        </div>
        <div>
          {this.renderList()}
        </div>
      </div>
    )
  }
}



export default connect(mapStateToProps)(ScriptLine);
