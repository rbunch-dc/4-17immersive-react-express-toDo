// 3rd party modules
import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Custom modules
import Home from './Home'

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    }
  }

  addStudent(event){

  }

  render() {

    return(
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    )
  }
}

export default ToDo;
