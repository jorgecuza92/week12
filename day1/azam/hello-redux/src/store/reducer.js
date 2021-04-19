
// global state 
const initialState = {
    count: 99, 
    name: "John Doe", 
    isAuthenticated: false 
}

// reducer is a function that gives you access to the state 
// and returns the UPDATED state 

const reducer = (state = initialState, action) => {

    if(action.type == 'INCREMENT') {
        return {
            ...state, 
            count: state.count + 1
        }
    } else if(action.type == 'AUTHENTICATE') {
        return {
            ...state, 
            isAuthenticated: true 
        }
    } else if(action.type == 'ADD') {
        return {
            ...state, 
            count: state.count + action.payload 
        }
    }

    return state 
}

export default reducer 

