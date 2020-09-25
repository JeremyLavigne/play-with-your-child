import { pickRandom } from '../memory/utils/functions'

const initialState = {
    cards : pickRandom(10),
    count : 0,
    player1points : 0,
    player2points : 0
}

export const increaseCount = () => {
  return {
    type : 'INCREASE_COUNT'
  } 
}

export const initCount = () => {
  return {
    type : 'INIT_COUNT'
  } 
}

export const increasePlayerPoints = (player) => {
  return {
    type : 'INCREASE_POINT',
    data : {
      value : player
    }
  } 
}

export const tryCard = (cardId) => {
  return {
    type : 'TRY_CARD',
    data : {
      value : cardId
    }
  }
}

export const validatePair = () => {
  return {
    type : 'VALIDATE_PAIR'
  }
}

export const turnBackMissed = () => {
  return {
    type : 'TURN_MISSED'
  }
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
    let cards = [...state.cards]

    switch (action.type) {
      case 'INCREASE_COUNT' :
        newState.count = state.count + 1
        return newState

      case 'INIT_COUNT' :
        newState.count = 0
        return newState

      case 'INCREASE_POINT' :
        console.log(action.data.value, action.data.value === 1)
        newState.player1points =  action.data.value === 1 ? state.player1points + 1 : state.player1points
        newState.player2points =  action.data.value === 2 ? state.player2points + 1 : state.player2points
        return newState

      case 'TRY_CARD' :
        newState.cards = cards.map((card) => (Number(card.id) === Number(action.data.value)) ?
        { id: card.id, pairId: card.pairId, image: card.image, hidden: false, disabled: "disabled", isTried: true, isSucceded: false} 
        : card )
        return newState

      case 'VALIDATE_PAIR' :
        newState.cards = cards.map(card => (card.isTried) ?
        { id: card.id, pairId: card.pairId, image: card.image, hidden: false, disabled: "disabled", isTried: false, isSucceded: true} 
        : card)
        return newState

      case 'TURN_MISSED' :
        newState.cards = cards.map((card) => card.isTried ?
        { id: card.id, pairId: card.pairId, image: card.image, hidden: true, disabled: null, isTried: false, isSucceded: false} 
        : card )
        return newState

      case 'NEW_GAME' :
        newState.cards = pickRandom(10)
        newState.count = 0
        newState.player1points = 0
        newState.player2points = 0
        return newState
        
      default: return state
    }
}
  
export default memoryReducer