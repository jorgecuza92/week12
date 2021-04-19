
// s a function that returns a function and is used to connect the component with the global state 
import { connect } from 'react-redux'

function DisplayCounter(props) {

  return(
    <div>
        <h1>{props.ctr}</h1>
        <h1>{props.fullName}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ctr: state.count,
    fullName: state.name
  }
}

// only displaying
export default connect(mapStateToProps)(DisplayCounter)