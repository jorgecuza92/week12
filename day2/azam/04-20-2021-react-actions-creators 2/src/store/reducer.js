
import * as actionTypes from './actions/actionTypes'

const initialState = {
    tasks: [], 
    count: 0, 
    movies: [], 
    isAuthenticated: false 
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state, 
                count: state.count + 1 
            }
        case actionTypes.TASK_ADD:
            return {
                ...state, 
                tasks: state.tasks.concat(action.payload)
            }
        case actionTypes.MOVIES_LOADED: 
            return {
                ...state, 
                movies: action.payload 
            }
        case 'LOGIN': 
            return {
                ...state, 
                isAuthenticated: true 
            }
        case 'LOGOUT': {
            return {
                ...state, 
                isAuthenticated: false 
            }
        }
        default: 
            return state 
    }

}

export default reducer