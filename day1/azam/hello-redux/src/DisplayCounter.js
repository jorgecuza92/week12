
// connect is a function that returns a function and it is used 
// to connect the component with the global state 
import { connect } from 'react-redux'

function DisplayCounter(props) {

    return (
        <div>
            <h1>DisplayCounter</h1>
        <h1>{props.count}</h1>
        <h4>{props.fullName}</h4>
        </div>
    )

}

// map Global State to Local Props 
const mapStateToProps = (state) => {
    return {
        count: state.count, 
        fullName: state.name  
    }
}

export default connect(mapStateToProps)(DisplayCounter)