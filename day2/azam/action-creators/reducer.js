
import * as actionTypes from './actions/actionTypes'

const initialState = {
    tasks: [], 
    count: 0
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
        default: 
            return state 
    }

}

export default reducer