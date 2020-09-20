import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeGame, newGame } from '../reducers/mainReducer'
import { newTicTac } from '../reducers/tictacReducer'

import Tictactoe from '../tictactoe/Tictactoe'
import PlayerBoard from './PlayerBoard'
import GameOverMsg from './GameOverMsg.js'
import Modal from 'react-bootstrap/Modal'



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
    if (openGame == "Tic Tac Toe") {dispatch(newTicTac())
  }
    
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
            <Tictactoe />
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