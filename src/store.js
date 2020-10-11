import { createStore, combineReducers } from 'redux'

import mainReducer from './reducers/mainReducer'
import tictacReducer from './reducers/tictacReducer'
import simonReducer from './reducers/simonReducer'
import memoryReducer from './reducers/memoryReducer'
import nimReducer from './reducers/nimReducer'


const reducer = combineReducers({
    main: mainReducer,
    tictac: tictacReducer,
    simon : simonReducer,
    memory : memoryReducer,
    nim : nimReducer
  })

const store = createStore(reducer)

export default store