import React, { Component } from 'react';
import { connect } from 'react-redux';


class ScriptLine extends Component {
  renderList(){
    return this.props.lines.map((line) => {
      return (
        <div className="text-container">
          <p className="script-text" key={this.props.id}>
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

function mapStateToProps(state){
  return {
    lines: state.lines
  }
};


export default connect(mapStateToProps)(ScriptLine);
