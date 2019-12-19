//     Name: Tommy Cao
//     Date: 12/19/19
//     Description: Todo React Application
import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    priorities: ['High', 'Medium', 'low']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        priority: this.refs.priority.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let priorityOptions = this.props.priorities.map(priority => {
      return <option key={priority} value={priority}>{priority}</option>
    });
    return (
      <div>
        <h3>Add Todo</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Priority</label><br />
            <select ref="priority">
              {priorityOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  priorities: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddProject;
