import React, { Component } from 'react';
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
    console.log("asjdfkjasdkl;fjsdl", this.refs)
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
    console.log("this.props.lines.line[0]:",this.props.lines.line[0])
    var lineComponents = [];
    for (var i = 0; i < this.props.lines.line[0].length; i++){
      lineComponents.push(
        <li key={this.props.lines.line[0][i].id}
            className="script-text"
            data-project={this.props.lines.line[0][i].project}
            ref={this.props.lines.line[0][i].id}>
          {this.props.lines.line[0][i].script_line}
        </li>
      )
      console.log("contents of lineComponents:", lineComponents)
    };
    return (
      <div>
          {lineComponents}
      </div>
    )
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
