const initialState = {
    boxesStatus : ["", "", "", "", "", "", "", "", ""]
}

export const boxIsClicked = (boxNumber, value) => {

  return {
    type : 'BOX_CLICKED',
    data : {
        index : boxNumber - 1,
        value : value
    }
  }
}

export const newTicTac = () => {
  return {
    type : 'NEW_GAME'
  }
}


const tictacReducer = (state = initialState, action) => {
    //console.log('state now: ', state)
    //console.log('action', action)
  
    let newState = {...state}

    switch (action.type) {
      case 'BOX_CLICKED' :
        newState.boxesStatus[action.data.index] = action.data.value
        return newState

      case 'NEW_GAME' :
        newState.boxesStatus = ["", "", "", "", "", "", "", "", ""]
        return newState
        
      default: return state
    }
}
  
export default tictacReducer