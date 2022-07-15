import {combineReducers} from "redux";

import todosReducer from "./todoReducer";
import counterReducer from "./counterReducer";


export const reducer = combineReducers({
    todos: todosReducer,
    counter: counterReducer
})