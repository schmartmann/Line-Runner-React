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
    this.session = this.props.session[0].user_email;
    this.lines = this.props.lines
  }
  renderList(){
    return this.lines.map((line) => {
      return (
        <div className="text-container">
          <p className="script-text" key={line.id}>
            {line.script_line}
          </p>
        </div>
      )
    })
  }
  render(){
    return(
      <div className="ScriptLine">
        {this.renderList()}
      </div>
    )
  }
}



export default connect(mapStateToProps)(ScriptLine);
