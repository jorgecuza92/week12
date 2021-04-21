
import * as actionTypes from '../actions/actionTypes'

export const incrementCounter = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const addTask = (payload) => {
    return {
        type: actionTypes.TASK_ADD, 
        payload: payload
    }
}

