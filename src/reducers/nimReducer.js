const initialState = {
    sticks : [
        {id: 1, picked : false, pickable : true},
        {id: 2, picked : false, pickable : true},
        {id: 3, picked : false, pickable : true},
        {id: 4, picked : false, pickable : false},
        {id: 5, picked : false, pickable : false},
        {id: 6, picked : false, pickable : false},
        {id: 7, picked : false, pickable : false},
        {id: 8, picked : false, pickable : false},
        {id: 9, picked : false, pickable : false},
        {id: 10, picked : false, pickable : false},
        {id: 11, picked : false, pickable : false},
        {id: 12, picked : false, pickable : false},
        {id: 13, picked : false, pickable : false},
        {id: 14, picked : false, pickable : false},
        {id: 15, picked : false, pickable : false}
    ],
    numberOfSticksLeft : 15
}


export const pickStick = (stickNumber) => {
  return {
    type : 'PICK_STICK',
    data : stickNumber
  }
}

export const decreaseNumberStickLeft = (numberOfStick) => {
  return {
    type : 'DECREASE_STICKS_LEFT',
    data : numberOfStick
  }
}

export const newNim = () => {
  return {
    type : 'NEW_GAME'
  }
}


const nimReducer = (state = initialState, action) => {
    //console.log('state now: ', state)
    //console.log('action', action)
  
    let newState = {...state}

    switch (action.type) {

      case 'PICK_STICK' :
        const sticks = [...state.sticks]
        newState.sticks = sticks.map(stick => stick.id === action.data ? {id: stick.id, picked: true, pickable: false} : 
          stick.id === (action.data+3) ? {id: stick.id, picked: stick.picked, pickable: true} : stick)
        return newState

      case 'DECREASE_STICKS_LEFT' :
        newState.numberOfSticksLeft = state.numberOfSticksLeft - action.data
        return newState

      case 'NEW_GAME' :
        newState.sticks = [
            {id: 1, picked : false, pickable : true},
            {id: 2, picked : false, pickable : true},
            {id: 3, picked : false, pickable : true},
            {id: 4, picked : false, pickable : false},
            {id: 5, picked : false, pickable : false},
            {id: 6, picked : false, pickable : false},
            {id: 7, picked : false, pickable : false},
            {id: 8, picked : false, pickable : false},
            {id: 9, picked : false, pickable : false},
            {id: 10, picked : false, pickable : false},
            {id: 11, picked : false, pickable : false},
            {id: 12, picked : false, pickable : false},
            {id: 13, picked : false, pickable : false},
            {id: 14, picked : false, pickable : false},
            {id: 15, picked : false, pickable : false}
        ]
        newState.numberOfSticksLeft = 15
        return newState
        
      default: return state
    }
}
  
export default nimReducer