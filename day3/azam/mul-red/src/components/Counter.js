
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'

function Counter(props) {
    return (
        <div className="App">
        <h1>{props.ctr}</h1>
        <button onClick = {() => props.onIncrement()}>Increment</button>
        <button onClick = {() => props.onDecrement()}>Decrement</button>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counterR.count // // globalstate.reducer.sliceofstate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(actionCreators.increment()), 
        onDecrement: () => dispatch(actionCreators.decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)