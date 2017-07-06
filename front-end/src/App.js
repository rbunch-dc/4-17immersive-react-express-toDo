import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theClass: [],
      teacher: "Rob"
    }
  }

  componentDidMount() {
    $.getJSON('http://localhost:3000/getStudents', (studentsFromApi)=>{
      console.log(studentsFromApi)
    });
    this.setState({
      theClass: [1,2,3,4]
    })
  }

  render() {

    var theClassArray = [];
    this.state.theClass.map((student,index)=>{
      theClassArray.push(<li key={index}>Student</li>);
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {theClassArray}
        </p>
      </div>
    );
  }
}

export default App;
