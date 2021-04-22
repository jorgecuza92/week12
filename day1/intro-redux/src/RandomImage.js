import {connect} from 'react-redux';
import {useState} from 'react';

function IncrementDecrement(props) {

  const [value, setValue] = useState('')

  const handleIncrement = () => {
    props.onIncrement()
  }

  const handleDecrement = () => {
    props.onDecrement()
  }

  const handleRandom = () => {
    props.onRandom()
  }


  return (
    <div>
      <h1>Increment Decrement Counter</h1>
      <h3>{props.counter}</h3>
      <button onClick= {handleIncrement}>Increment</button>
      <button onClick= {handleDecrement}>Decrement</button>
      <button onClick= {handleRandom}>Random Picture</button>
    </div>
  )


}
const mapStateToProps = (state) => {
  return {
    counter: state.counter, 
    randomImages: state.randomImages
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({type: 'INCREASE'}),
    onDecrement: () => dispatch({type: 'DECREASE'}),
    onRandom: () => dispatch({type: 'RANDOM', payload: }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncrementDecrement)