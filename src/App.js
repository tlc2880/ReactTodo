//     Name: Tommy Cao
//     Date: 12/19/19
//     Description: Todo CRUD React Application with Bootstrap

import React, { Component } from 'react';
import Projects from "./Components/Projects.js";

// Scripts
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Projects/>
      </div>
    );
  }
}

export default App;