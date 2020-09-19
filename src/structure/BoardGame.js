import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeGame } from '../reducers/mainReducer'
import Tictactoe from '../tictactoe/Tictactoe'
import PlayerBoard from './PlayerBoard'


// ------------------------------------------------------------------------------------------------
const BoardGame = () => {

  const dispatch = useDispatch()
  const openGame = useSelector(state => state.openGame)

  const handleClickBack = () => {
      dispatch(closeGame())
  }

  return (

    <div className="container">

      <header className="container d-flex justify-content-between p-1 my-4">
        <h2 className="font-weight-bold font-italic"> {openGame} </h2>

        <button className="btn btn-sm btn-danger" onClick={handleClickBack} > Back </button>
      </header>

      <div className="container border">
        <div className="row">

          <div className="col-6 col-lg-3 bg-light d-flex align-items-center">
            <PlayerBoard playerName="Player 1" />
          </div>

          <div className="col-6 col-lg-3 order-lg-last bg-light d-flex align-items-center">
            <PlayerBoard playerName="Player 2"/>
          </div>

          <div className="col-12 col-lg-6 p-5 bg-dark">
            <Tictactoe />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default BoardGame