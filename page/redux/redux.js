import { combineReducers, createStore } from "redux";
import reducer from './reducer'

const rootReducer = combineReducers({
    reply: reducer
})

export const store = createStore(rootReducer)