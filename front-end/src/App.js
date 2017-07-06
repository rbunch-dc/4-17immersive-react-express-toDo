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

  // compondentDidMount runs AFTER the first render
  componentDidMount() {
    // getJSON request to localhost:3000 ... that's where Express is listening
    $.getJSON('http://localhost:3000/getStudents', (studentsFromApi)=>{
      // log the JSON response from Express
      console.log(studentsFromApi)
      this.setState({
        theClass: studentsFromApi.students
      })
    });
    // Update the state... this will cause a re-render
    // this.setState({
    //   theClass: [1,2,3,4]
    // })
  }

  render() {

    // Create an array to dump into our return. It will contain
    // components or HTML tags
    var theClassArray = [];
    // Loop throuhg our state var. The frist time through, it will be empty
    this.state.theClass.map((mightyDucks,index)=>{
      // push an li tag onto our array for each element in the state var
      theClassArray.push(<li key={index}>{mightyDucks}</li>);
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
