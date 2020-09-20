import { createStore, combineReducers } from 'redux'

import mainReducer from './reducers/mainReducer'
import tictacReducer from './reducers/tictacReducer'


const reducer = combineReducers({
    main: mainReducer,
    tictac: tictacReducer
  })

const store = createStore(reducer)

export default store