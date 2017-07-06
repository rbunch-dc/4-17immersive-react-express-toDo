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
    // Make sure addStudent uses the corrent "this"
    this.addStudent = this.addStudent.bind(this);
  }

  // compondentDidMount runs AFTER the first render
  componentDidMount() {
    // getJSON request to localhost:3000 ... that's where Express is listening
    $.getJSON('http://localhost:3000/getStudents', (studentsFromApi)=>{
      // log the JSON response from Express
      console.log(studentsFromApi)
      this.setState({
        theClass: studentsFromApi
      })
    });
    // Update the state... this will cause a re-render
    // this.setState({
    //   theClass: [1,2,3,4]
    // })
  }

  addStudent(event){
    // var studentToAdd = this.state.studentName
    // console.log(event.target)
    var studentToAdd = event.target.parentNode.childNodes[0].value;
    // var studentToAdd = document.getElementById('newStudent')
    // console.log(studentToAdd);
    // THis is a POST request, so we can't use $.getJSON (only does get)
    // $.ajax expects an object that tells it what to send (data), 
    // where to send it (url), and how to send it (method)
    // $.ajax is a promise which has a "done" method that will run when
    // ajax is back. It gets a param of whatever JSON was returned by the API request
    // Inside that funciton, we update REact state (theClass), which causes
    // a re-render, which updates the list because we are mapping through this.state.theClass.

    $.ajax({
      method: "POST",
      url: "http://localhost:3000/addStudent",
      data: {name: studentToAdd}
    }).done((studentsArray)=>{
      this.setState({
        theClass:studentsArray
      })
    })
  }

  render() {

    // Create an array to dump into our return. It will contain
    // components or HTML tags
    var theClassArray = [];
    // Loop throuhg our state var. The frist time through, it will be empty
    this.state.theClass.map((mightyDuck,index)=>{
      // push an li tag onto our array for each element in the state var
      theClassArray.push(<li key={index}>{mightyDuck.name}</li>);
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
        <div className="add-box">
          <input type="text" id="newStudent" />
          <button onClick={this.addStudent}>Add Student</button>
        </div>
        <p>
          {theClassArray}
        </p>
      </div>
    );
  }
}

export default App;
