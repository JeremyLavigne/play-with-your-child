import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { nextPlayer, gameOver, setWinner } from '../reducers/mainReducer'
import { boxIsClicked } from '../reducers/tictacReducer'

import { checkWin, checkGameOver} from './utils/functions'


// ------------------------------------------------------------------------------------------------
// One (of 9) box inside Tic Tac Toe - can be empty, X or O
// ------------------------------------------------------------------------------------------------
const Box = ({boxNumber}) => {

    const dispatch = useDispatch()
    const playerTurn = useSelector(state => state.main.playerTurn)
    const boxes = useSelector(state => state.tictac.boxesStatus)

    const boxContent = useSelector(state => state.tictac.boxesStatus[boxNumber-1])


    useEffect(() => {
        const win = checkWin(boxes)
        if (win == "x") { 
            dispatch(setWinner("Player 1"))
            dispatch(gameOver())
        }
        if (win == "o") { 
            dispatch(setWinner("Player 2"))
            dispatch(gameOver())
        }

        if (checkGameOver(boxes)) {dispatch(gameOver())}
        
    }, [boxContent])


    const handleClickBox = () => {
        
        if (playerTurn == 1){ 
            //setBoxContent("x") 
            dispatch(boxIsClicked(boxNumber, "x"))
        } else {
            //setBoxContent("o")
            dispatch(boxIsClicked(boxNumber, "o"))
        }
        
        dispatch(nextPlayer())
    }

    return (

        <div 
            className="border bg-light d-flex justify-content-center align-items-center" 
            style={boxStyle}
            onClick={handleClickBox}
        >
            {boxContent == "x" ?
                <i className="fas fa-times fa-5x text-danger"></i>
                : boxContent == "o" ?
                <i className="far fa-circle fa-5x text-info"></i>
                :
                null
            }
        </div>

    )
}

// See if we can make a custom cursor (X - O)
const boxStyle = { 
    height: '100px', width: '100px',
    minHeight: '50px', minWidth: '50px',
    cursor: 'pointer'
}

export default Box