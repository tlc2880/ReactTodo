//     Name: Tommy Cao
//     Date: 12/19/19
//     Description: Todo React Application

import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Dialog from './Components/Dialog';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
    }
  }

  getProjects(){
    this.setState({projects: [
    {
      id:uuid.v4(),
      title: 'Goto meeting',
      priority: 'High'
    },
    {
      id:uuid.v4(),
      title: 'Test code',
      priority: 'Medium'
    },
    {
      id:uuid.v4(),
      title: 'Pickup kids',
      priority: 'low'
    },
    {
      id:uuid.v4(),
      title: 'Write document',
      priority: 'High'
    },
    {
      id:uuid.v4(),
      title: 'Exercise',
      priority: 'Medium'
    },
    {
      id:uuid.v4(),
      title: 'Buy milk',
      priority: 'low'
    }
    ]});
  }

  componentWillMount(){
    this.getProjects();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <button onClick={(e) => this.setState({ isOpen: true })} addProject={this.handleAddProject.bind(this)} >Dialog</button>
        <br/>
        <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
          
        </Dialog>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
      </div>
    );
  }
}

export default App;
