import { createStore, combineReducers } from 'redux'
import mainReducer from './reducers/mainReducer'


/*
const reducer = combineReducers({
    score: scoreReducer,
    word: wordReducer,
    gameMode : gameModeReducer
  })
*/
const store = createStore(mainReducer)

export default store