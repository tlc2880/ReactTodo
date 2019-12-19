//     Name: Tommy Cao
//     Date: 12/19/19
//     Description: Todo React Application
import React, { Component } from 'react';
import uuid from 'uuid';

let dialogStyles = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};


class Dialog extends Component {
    constructor(){
        super();
        this.state = {
          newProject:{}
        }
      }
    
      static defaultProps = {
        priorities: ['High', 'Medium', 'Low']
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
            console.log(this.state);
            this.props.addProject(this.state.newProject);
          });
        }
        e.preventDefault();
      }
    
      render() {
        let priorityOptions = this.props.priorities.map(priority => {
          return <option key={priority} value={priority}>{priority}</option>
        });

        let dialog = (
            <div style={dialogStyles}>
                <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>X</button>

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
            </div>
        );

        if (! this.props.isOpen) {
            dialog = null;
        }

        return (
            <div>
                {dialog}
            </div>
        );
      }
}

Dialog.propTypes = {
    priorities: React.PropTypes.array,
    addProject: React.PropTypes.func
  }

export default Dialog;
