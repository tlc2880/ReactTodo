//     Name: Tommy Cao
//     Date: 12/19/19
//     Description: Todo CRUD React Application with Bootstrap

import React, { Component } from 'react';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newTodo:{}
    }
  }

  static defaultProps = {
    priorities: ['High', 'Medium', 'low']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newTodo:{
        title: this.refs.title.value,
        priority: this.refs.priority.value
      }}, function(){
        this.props.addTodo(this.state.newTodo);
      });
    }
    this.refs.title.value = ''; // clear input title field
    e.preventDefault();
  }

  render() {
    let priorityOptions = this.props.priorities.map(priority => {
      return <option key={priority} value={priority}>{priority}</option>
    });
    return (
      <div>
        <h3>Add Todo</h3>
        <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
                <input className="form-control form-control-lg" type="text" ref="title" />
                <span><select className="form-control form-control-lg" ref="priority">{priorityOptions}</select></span>
                <input className="btn btn-success" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddProject;
