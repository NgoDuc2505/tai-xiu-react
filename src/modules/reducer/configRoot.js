import { combineReducers, createStore } from 'redux'
import { gameReducer }from './gameReducer'
const rootReducer = combineReducers({
    gameReducer,
})

export const store = createStore(
    rootReducer,
    window.
    _REDUX_DEVTOOLS_EXTENSION__ &&
    window._REDUX_DEVTOOLS_EXTENSION__()
    );



    