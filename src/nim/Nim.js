import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Stick from './Stick'
import { pickStick, decreaseNumberStickLeft } from '../reducers/nimReducer'
import { nextPlayer, setWinner, gameOver } from '../reducers/mainReducer'


// ------------------------------------------------------------------------------------------------
// Nim's Game main component
// ------------------------------------------------------------------------------------------------
const Nim = () => {

  const dispatch = useDispatch()
  const sticks = useSelector(state => state.nim.sticks)
  const playerTurn = useSelector(state => state.main.playerTurn)
  const numberOfSticksLeft = useSelector(state => state.nim.numberOfSticksLeft)

  const handleClickPick123 = (howMany) => {
    
    if (howMany === 1) {
      dispatch(pickStick(16- numberOfSticksLeft))
      dispatch(decreaseNumberStickLeft(1))
    } else if (howMany === 2) {
      dispatch(pickStick(16 - numberOfSticksLeft))
      dispatch(pickStick(16 - numberOfSticksLeft + 1))
      dispatch(decreaseNumberStickLeft(2))
    } else {
      dispatch(pickStick(16 - numberOfSticksLeft))
      dispatch(pickStick(16 - numberOfSticksLeft + 1))
      dispatch(pickStick(16 - numberOfSticksLeft + 2))
      dispatch(decreaseNumberStickLeft(3))
    } 

    if (numberOfSticksLeft - howMany === 0) {
      if (playerTurn === 1) {
        dispatch(setWinner("Player 2"))
      } else {
        dispatch(setWinner("Player 1"))
      }
      dispatch(gameOver())
    }

    dispatch(nextPlayer())
    
  }

  return (

    <div className="container d-flex flex-column justify-content-center p-0">

      <div className="container text-center text-white"> 
        <p>Take 
          <button 
            className="btn btn-light btn-sm mx-1" 
            onClick={() => handleClickPick123(1)}
            disabled={numberOfSticksLeft > 0 ? "" : "disabled"}
          >
            1
          </button > 
          <button 
            className="btn btn-light btn-sm mx-1" 
            onClick={() => handleClickPick123(2)}
            disabled={numberOfSticksLeft > 1 ? "" : "disabled"}
          >
            2
          </button> 
          <button 
            className="btn btn-light btn-sm mx-1" 
            onClick={() => handleClickPick123(3)}
            disabled={numberOfSticksLeft > 2 ? "" : "disabled"}
          >
            3
          </button>
           stick(s) ?
        </p>
      </div>

      <div className="d-flex">

        {sticks.map(stick => 
          <Stick key={stick.id} stick={stick}/>
        )}

      </div>

    </div>

  )
}

export default Nim