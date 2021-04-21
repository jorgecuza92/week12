import './App.css';
import { useState } from 'react'
import { connect } from 'react-redux'
import TaskList from './TaskList';
import * as actionCreators from './store/creators/actionCreators'

function App(props) {
  
  const [taskName, setTaskName] = useState("")

  const handleOnChange = (e) => {
    setTaskName(e.target.value) 
  }

  const handleAddTask = () => {
    // put taskName in Redux Global State 
    // ????
    props.onTaskAdd(taskName)
  }

  return (
   <div>
     <h1>TodoList</h1>
     <input type = "text" onChange={handleOnChange}/>
     <button onClick = {handleAddTask}>Add</button>
     <TaskList />
   </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskAdd: (task) => dispatch(actionCreators.addTask(task)), 
    onIncrement: () => dispatch(actionCreators.incrementCounter())
  }
}

export default connect(null, mapDispatchToProps)(App);

