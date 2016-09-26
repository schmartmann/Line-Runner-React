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
    this.session = this.props.session.user_email;
    this.lines = this.props.lines
    this.vocalize = this.vocalize.bind(this)
  }
  vocalize(){
    console.log(this.lines)
  }
  renderList(){
    // return this.lines.map((line) => {
      return (
        <div className="text-container">
          {console.log(this.props)}
          <input className="script-text"
          onClick={this.vocalize.bind(this)}
          key={this.lines.id}
          value={this.lines.line[0]}
          type="button"/>
        </div>
      )
    // })
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
