import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchScripts, fetchProjects } from './actions/index';
import { bindActionCreators } from 'redux';

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
    this.hideUploadForm = this.hideUploadForm.bind(this);
    this.fetchScripts = this.props.fetchScripts.bind(this);
    this.openScripts = this.openScripts.bind(this);
    this.fetchProjects = this.props.fetchProjects.bind(this);
    this.getProjects = this.getProjects.bind(this);
    this.clear = this.clear.bind(this);
  }
  revealUploadForm(){
    this.setState({revealUploadForm: true, instructionsDisplay: false})
  }
  hideUploadForm(){
    this.setState({revealUploadForm: false, instructionsDisplay: false})
  }
  onInputChangeProject(event) {
    this.setState({ projectName: event.target.value});
  }
  clear(){
    this.setState({projectName: ''})
  }
  openScripts(event){
    let email = this.props.session.user_email
    let project = event.target.innerHTML
    console.log(email, project)
    this.fetchScripts(project, email)
    this.setState({
      revealSavedScriptsList: false
    });
  }
  getProjects(){
    console.log("navbar", this.props.lines)
    this.setState({
      instructionsDisplay: false,
      revealUploadForm: false,
      revealSavedScriptsList: true
    });
    let props = this.props.session.user_email;
    this.fetchProjects(props);
    this.projectList()
  }
  projectList(){
    var projectNames = [];
    console.log("projectList props.lines contents:", this.props.lines.projects)
    if (this.props.lines.projects === undefined){

    } else {
      for (var i = 0; i < this.props.lines.projects.length; i++){
        projectNames.push(
          <li key={i}
              onClick={this.openScripts}
              ref={this.props.lines.projects[i]}
              className="script-text">
            {this.props.lines.projects[i]}
          </li>
        )
      };
    }
    console.log("projectNames contents:", projectNames)
    return (
      <div>
          {projectNames}
      </div>
    )
  }
  render(){
    return(
      <div className="Navbar">
        <div className="button-bar">
          <button onClick={this.revealUploadForm}>
            Add New Script
          </button>
          <button onClick={this.getProjects}>
            Open Saved Script
          </button>
        </div>
        <blockquote className={this.state.instructionsDisplay? "" : "instructions-hide" }>
          <h4>Click "Add New Script" to get started!</h4>
          <h4>Or click "Open Saved Script" to resume playback</h4>
          <h4>of a previously saved script.</h4>
        </blockquote>
        <div id="saved-projects-bar" className={this.revealSavedScriptsList? "saved-projects-bar-hide" : "saved-projects-bar"}>
          {this.projectList()}
        </div>
        <div id="upload-form" className={this.state.revealUploadForm? "": "upload-form-hide"}>
        <form ref='uploadForm'
            id='uploadForm'
            action='http://localhost:3001/uploads'
            method='post'
            encType="multipart/form-data">
            <input id="upload-name" type="text" name="project" onClick={this.clear} onChange={this.onInputChangeProject} value={this.state.projectName}/>
            <input type="hidden" name="user_email" value={this.props.session.user_email}/>
            <input id="upload-file" type="file" name="upl" />
            <input id="upload-submit" type='submit' onClick={this.hideUploadForm} value='Get this read now!' />
        </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    lines: state.lines,
    session: state.session
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchScripts: fetchScripts,
    fetchProjects: fetchProjects
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
