// 3rd party modules
import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Custom modules
import Home from './Home'
import Delete from './Delete'

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
        <div className="to-do-app">
          <Route exact path="/" component={Home} />
          <Route path="/task/delete/:taskId" component={Delete} />
        </div>
      </Router>
    )
  }
}

export default ToDo;
