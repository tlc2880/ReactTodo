//     Name: Tommy Cao
//     Date: 12/19/19
//     Description: Todo React Application
import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    this.props.projects.sort(function(a,b){
      var x = a.priority;
      var y = b.priority;
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });

    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        );
      });
    }
    return (
      <div className="Projects">
        <h3>Todo List</h3>
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Projects;
