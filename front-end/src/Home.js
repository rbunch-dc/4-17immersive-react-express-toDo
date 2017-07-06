import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			taskList: []
		}
		// Make sure addNewTask uses the class "this"
		this.addNewTask = this.addNewTask.bind(this)
	}

  // compondentDidMount runs AFTER the first render
  componentDidMount() {
    // getJSON request to localhost:3000 ... that's where Express is listening
    $.getJSON('http://localhost:3000/getTasks', (tasksFromApi)=>{
      // log the JSON response from Express
      console.log(tasksFromApi)
      this.setState({
        taskList: tasksFromApi
      })
    });
    // Update the state... this will cause a re-render
    // this.setState({
    //   theClass: [1,2,3,4]
    // })
  }

	addNewTask(event){
		event.preventDefault();
    	var newTask = document.getElementById('new-task').value;
    	var newTaskDate = document.getElementById('new-task-date').value;
    	// console.log(newTask)
    	// console.log(newTaskDate)
    // THis is a POST request, so we can't use $.getJSON (only does get)
    // $.ajax expects an object that tells it what to send (data), 
    // where to send it (url), and how to send it (method)
    // $.ajax is a promise which has a "done" method that will run when
    // ajax is back. It gets a param of whatever JSON was returned by the API request
    // Inside that funciton, we update REact state (theClass), which causes
    // a re-render, which updates the list because we are mapping through this.state.theClass.

	    $.ajax({
	      method: "POST",
	      url: "http://localhost:3000/addTask",
	      data: {
	      	taskName: newTask,
	      	taskDate: newTaskDate
	      }
	    }).done((tasksArray)=>{
	      this.setState({
	        taskList: tasksArray
	      })
	    })		
	}

	render(){

	    // Create an array to dump into our return. It will contain
	    // components or HTML tags
	    var taskArray = [];
	    // Loop throuhg our state var. The frist time through, it will be empty
	    this.state.taskList.map((task,index)=>{
	      // push an li tag onto our array for each element in the state var
	      taskArray.push(
	      	<div key={index}>
	      		<Link to={`/task/delete/${task.id}`}>{task.task_name}</Link> | 
	      		<Link to={`/task/get/${task.id}`}>Delete</Link> | 
	      		<Link to={`/task/edit/${task.id}`}>Edit</Link>
	      	</div>);
	    });		

		return(
		      <div className="App">
		        <div className="App-header">
		           <img src={logo} className="App-logo" alt="logo" />
		          <h2>Welcome to React</h2>
		        </div>
		        <p className="App-intro">
		         
		        </p>

		        <form onSubmit={this.addNewTask} className="add-box">
		          <input type="text" id="new-task" placeholder="New Task..."/>
		          <input type="date" id="new-task-date" />
		          <button type="submit" className="btn btn-primary">Add Task</button>
		        </form>

		        <p>
		          {taskArray}
		        </p>
		      </div>
		)
	}

}

export default Home;