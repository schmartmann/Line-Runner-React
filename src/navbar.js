import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchScripts } from './actions/index';
import { bindActionCreators } from 'redux';
import axios from 'axios';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      revealUploadForm: false,
      instructionsDisplay: true,
      revealSavedScriptsList: false,
      projectName: 'Enter your project name here!'
    }
    this.onInputChangeProject = this.onInputChangeProject.bind(this);
    this.revealUploadForm = this.revealUploadForm.bind(this);
    this.fetchScripts = this.fetchScripts.bind(this)
    this.clear = this.clear.bind(this)
  }
  revealUploadForm(){
    this.setState({revealUploadForm: true, instructionsDisplay: false})
  }
  onInputChangeProject(event) {
    this.setState({ projectName: event.target.value});
  }
  clear(){
    this.setState({projectName: ''})
  }
  fetchScripts(){
    let email = this.props.session.user_email
    const response = axios({
      method: 'get',
      url: `http://localhost:3001/uploads/?${email}`
      // headers: {'X-Requested-With': 'XMLHttpRequest'},
    }).then(function(response){
      console.log(response)
    })
  }
  render(){
    return(
      <div className="Navbar">
        <div className="button-bar">
          <button onClick={this.revealUploadForm}>
            Add New Script
          </button>
          <button onClick={this.fetchScripts}>
            Open Saved Script
          </button>
        </div>
        <blockquote className={this.state.instructionsDisplay? "" : "instructions-hide" }>
          <h4>Click "Add New Script" to get started!</h4>
          <h4>Or click "Open Saved Script" to resume playback</h4>
          <h4>of a previously saved script.</h4>
        </blockquote>
        <div id="upload-form" className={this.state.revealUploadForm? "": "upload-form-hide"}>
        <form ref='uploadForm'
            id='uploadForm'
            action='http://localhost:3001/uploads'
            method='post'
            encType="multipart/form-data">
            <input id="upload-name" type="text" name="project" onClick={this.clear} onChange={this.onInputChangeProject} value={this.state.projectName}/>
            <input type="hidden" name="user_email" value={this.props.session.user_email}/>
            <input id="upload-file" type="file" name="upl" />
            <input id="upload-submit" type='submit' value='Get this read now!' />
        </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    session: state.session
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchScripts: fetchScripts}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
