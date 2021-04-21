
const initialState = {
    tasks: [] 
}

const reducer = (state = initialState, action) => {

    if(action.type == 'TASK_ADD') {
        return {
            ...state, 
            tasks: state.tasks.concat(action.payload)
        }
    }

    return state
}

export default reducer