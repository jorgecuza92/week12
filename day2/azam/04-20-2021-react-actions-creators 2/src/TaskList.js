
import { connect } from 'react-redux'

function TaskList(props) {

    const tasks = props.tasks 
    const taskItems = tasks.map((task, index) => {
        return <li key = {index}>{task}</li>
    })

    return (
        <div>
            <h1>TaskList</h1>
            {taskItems}
        </div>
       
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskList) 