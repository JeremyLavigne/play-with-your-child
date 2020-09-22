import { createStore, combineReducers } from 'redux'

import mainReducer from './reducers/mainReducer'
import tictacReducer from './reducers/tictacReducer'
import simonReducer from './reducers/simonReducer'


const reducer = combineReducers({
    main: mainReducer,
    tictac: tictacReducer,
    simon : simonReducer
  })

const store = createStore(reducer)

export default store