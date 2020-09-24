import { pickRandom } from '../memory/utils/functions'

const initialState = {
    cards : pickRandom(10)
}


export const newMemory = () => {
  return {
    type : 'NEW_GAME'
  }
}


const memoryReducer = (state = initialState, action) => {
    //console.log('state now: ', state)
    //console.log('action', action)
  
    let newState = {...state}

    switch (action.type) {
      case 'NEW_GAME' :
        newState.boxesStatus = pickRandom(10)
        return newState
        
      default: return state
    }
}
  
export default memoryReducer