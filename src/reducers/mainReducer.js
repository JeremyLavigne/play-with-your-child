const initialState = {
    openGame : "none",
    player1Name : "Player 1",
    player2Name : "Player 2",
    playerTurn : 1,
    gameOver : false
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

export const changePlayerName = (playerNumber, newName) => {
    return {
        type : 'CHANGE_PLAYER_NAME',
        data : {
            playerNumber : playerNumber,
            newName : newName
        }
    }
}

export const nextPlayer = () => {
    return {
        type : 'NEXT_PLAYER',
    }
}

export const gameOver = () => {
    return {
      type : 'GAME_OVER'
    }
}

export const newGame = () => {
    return {
      type : 'NEW_GAME'
    }
  }


const mainReducer = (state = initialState, action) => {
    //console.log('state now: ', state)
    //console.log('action', action)

    let newState = {...state}
  
    switch (action.type) {
        case 'OPEN_GAME' :
            newState.openGame = action.data.gameName
            newState.playerTurn = Math.floor(Math.random() * Math.floor(2)) + 1
            return newState

        case 'CLOSE_GAME' :
            newState.openGame = "none"
            return newState

        case 'CHANGE_PLAYER_NAME' :
            if (action.data.playerNumber == 1) { newState.player1Name = action.data.newName}
            else { newState.player2Name = action.data.newName}
            return newState

        case 'NEXT_PLAYER' : 
            newState.playerTurn = (state.playerTurn == 1) ? 2 : 1
            return newState

        case 'GAME_OVER' :
            newState.gameOver = true
            return newState

        case 'NEW_GAME' :
            newState.playerTurn = Math.floor(Math.random() * Math.floor(2)) + 1
            newState.gameOver = false
            return newState

      default: return state
    }
}
  
export default mainReducer