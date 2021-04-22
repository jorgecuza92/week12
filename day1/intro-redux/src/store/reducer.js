

// global state
const initialState = {
  count: 99,
  name: 'John Doe',
  counter: 0,
  randomImages: []
}

// reducer is a function that gives you access to the state 
// and returns the UPDATED state
const reducer = (state = initialState ,action) => {
  if(action.type == 'INCREMENT') {
    return {
      count: state.count + 1
    }
  } else if(action.type == 'ADD') {
    return {
      ...state,
      count: state.count + action.payload
    }
  } else if(action.type == 'INCREASE') {
    return {
      counter: state.counter + 1
    }
  } else if(action.type == 'DECREASE') {
    return {
      counter: state.counter - 1
    }
  } else if(action.type == 'RANDOM') {
    return {
      randomImages: state.randomImages
    }
  }
  return state

}

export default reducer 