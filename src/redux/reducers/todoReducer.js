import {
    SET_TODOS,
    RESET_TODOS,
    TOGGLE_TODOS
} from "../action-types";


const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS: {
            return {
                ...state,
                todos: action.payload
            }
        }
        case RESET_TODOS: {
            return {
                ...state,
                todos: []
            }
        }
        case TOGGLE_TODOS: {
            return {
                ...state,
                completed: !state.completed
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;