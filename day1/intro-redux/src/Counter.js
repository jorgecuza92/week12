import {connect} from 'react-redux'
import {useState} from 'react'

function Counter(props) {

  const [value, setValue] = useState(0)

  const handleIncrement = () => {
    props.onIncrement()
  }

  const handleOnChange = (e) => {
    setValue(parseInt(e.target.value))
  }

  const handleAdd = () => {
    props.onAdd(value)
  }

  return(
    <div>
      <h1>{props.ctr}</h1>
      <input type='text' onChange= {handleOnChange} />
      <button onClick= {handleAdd}>Add</button>
      <button onClick ={handleIncrement}>Increment</button>
    </div>

  )
}
const mapStateToProps = (state) => {
  return {
    ctr: state.count
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({type: 'INCREMENT'}),
    onAdd: (value) => dispatch({type: 'ADD', payload: value})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)