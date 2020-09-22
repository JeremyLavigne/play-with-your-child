import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Reducers
import { closeGame, newGame } from '../reducers/mainReducer'
import { newTicTac } from '../reducers/tictacReducer'
import { newSimon } from '../reducers/simonReducer'

// Components
import Tictactoe from '../tictactoe/Tictactoe'
import Simon from '../simon/Simon'
import Memory from '../memory/Memory'
import Nim from '../nim/Nim'
import Connect from '../connect/Connect'
import Unknown from '../unknown/Unknown'

import PlayerBoard from './PlayerBoard'
import GameOverMsg from './GameOverMsg.js'
import Modal from 'react-bootstrap/Modal'


// ------------------------------------------------------------------------------------------------
// Board Game - same for all games, display content regarding user choice
// NavBar and NewGame is handled here
// ------------------------------------------------------------------------------------------------
const BoardGame = () => {

  const dispatch = useDispatch()
  const openGame = useSelector(state => state.main.openGame)
  const gameOver = useSelector(state => state.main.gameOver)

  const handleClickBack = () => {
      dispatch(closeGame())
  }

  const handleClickNew = () => {
    dispatch(newGame())
    if (openGame == "Tic Tac Toe") {dispatch(newTicTac())}
    if (openGame == "Simon Game") {dispatch(newSimon())}
    
}

  return (

    <div className="container">

      <header className="container d-flex justify-content-between p-1 my-4">
        <h2 className="font-weight-bold font-italic"> {openGame} </h2>

        <button className="btn btn-sm btn-info" onClick={handleClickNew} > New </button>

        <button className="btn btn-sm btn-danger" onClick={handleClickBack} > Back </button>
      </header>

      <div className="container border">
        <div className="row">

          <div className="col-6 col-lg-3 bg-light d-flex align-items-center">
            <PlayerBoard playerNumber={1} />
          </div>

          <div className="col-6 col-lg-3 order-lg-last bg-light d-flex align-items-center">
            <PlayerBoard playerNumber={2}/>
          </div>

          <div className="col-12 col-lg-6 p-5 bg-dark">
            { openGame == "Tic Tac Toe" ?
              <Tictactoe />
              : openGame == "Simon Game" ?
              <Simon />
              : openGame == "Memory" ?
              <Memory />
              : openGame == "Nim's Game" ?
              <Nim />
              : openGame == "Connect 4" ?
              <Connect />
              : openGame == "Unknown" ?
              <Unknown />
              :
              null
            }
          </div>
          
        </div>
      </div>

      <Modal show={gameOver} onHide={handleClickNew}>
        <GameOverMsg newGame={handleClickNew}/>
      </Modal>

    </div>
  )
}

export default BoardGame