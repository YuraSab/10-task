import {
    SET_TODOS,
    RESET_TODOS,
    TOGGLE_TODOS,
} from "../action-types";

export const setTodo = (payload) => ({type: SET_TODOS, payload: payload})
export const resetTodo = () => ({type: RESET_TODOS})
export const toggleTodo = () => ({type: TOGGLE_TODOS})