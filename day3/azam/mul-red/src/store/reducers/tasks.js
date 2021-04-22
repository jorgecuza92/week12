

import * as actionTypes from '../actions/actionTypes'

const initialState = {
    tasks: [] 
}

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case actionTypes.ADD_TASK: 
            return {
                ...state, 
                tasks: state.tasks.concat(action.payload)
            }
        case actionTypes.DELETE_TASK: 
            return {
                ...state, 
                tasks: state.tasks.filter((task) => task != action.payload)
            }
        default:
            return state 
    }

}

export default reducer