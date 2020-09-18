const initialState = {
    openGame : "none"
}


export const openOneGame = (gameName) => {
    return {
        type : 'OPEN_GAME',
        data : {
            gameName : gameName
        }
    }
}

export const closeGame = () => {
    return {
        type : 'CLOSE_GAME',
    }
}

const mainReducer = (state = initialState, action) => {
    //console.log('state now: ', state)
    //console.log('action', action)
  
    switch (action.type) {
        case 'OPEN_GAME' :
            return {
                openGame : action.data.gameName
            }
        case 'CLOSE_GAME' :
            return {
                openGame : "none"
            }
      default: return state
    }
}
  
export default mainReducer