
import { useState } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'


function TodoList(props) {

    const [taskName, setTaskName] = useState('')

    const handleOnChange = (e) => {
        setTaskName(e.target.value)
    }

    const handleAddTask = () => {
        props.onAddTask(taskName)
        setTaskName('')
    }

    const handleDelete = (task) => {
        props.onDeleteTask(task)
    }

    const tasks = props.tasks 
    const taskItems = tasks.map((task, index) => {
        return <div key = {index}>{task} <button onClick = {() => handleDelete(task)}>Delete</button></div>
    })

    return (
        <div>
            <input type="text" onChange={handleOnChange} value = {taskName}/>
            <button onClick = {handleAddTask}>Add Task</button>
            {taskItems}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.taskR.tasks // globalstate.reducer.sliceofstate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTask: (task) => dispatch(actionCreators.addTask(task)), 
        onDeleteTask: (task) => dispatch(actionCreators.deleteTask(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)