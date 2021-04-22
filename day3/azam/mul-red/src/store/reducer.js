/*
const initialState = {
    count: 0, 
    tasks: [] 
}

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'INCREMENT': 
            return {
                ...state, 
                count: state.count + 1 
            }
        case 'DECREMENT': 
            return {
                ...state, 
                count: state.count - 1
            }
        case 'ADD_TASK': 
            return {
                ...state, 
                tasks: state.tasks.concat(action.payload)
            }
        case 'DELETE_TASK': 
            return {
                ...state, 
                tasks: state.tasks.filter((task) => task != action.payload)
            }

        
        default:
            return state 
    }

}

export default reducer
*/
// ACTIVITY 1 

const initialState = {
    count: 0, 
    randomImages: [] 
}

const reducer = (state = initialState, action) => {
    if(action.type == 'ADD_RANDOM_IMAGE') {
        return {
            ...state, 
            randomImages: state.randomImages.concat(action.payload)
        }
    }

    return state 
}

export default reducer 