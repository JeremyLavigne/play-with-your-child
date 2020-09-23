import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToPlayerSequence, endPlayerSequence } from '../reducers/simonReducer'
import { gameOver, nextPlayer, setWinner } from '../reducers/mainReducer'

import { checkMatchSequence } from './utils/functions'


// ------------------------------------------------------------------------------------------------
// One (of 4) buttons inside Simon Game - red/green/blue/yellow
// ------------------------------------------------------------------------------------------------
const SimonButton = ({ color, radius }) => {

    const dispatch = useDispatch()
    const buttonsAreDisabled = useSelector(state => state.simon.buttonsAreDisabled)
    const originalSequence = useSelector(state => state.simon.originalSequence)
    const playerSequence = useSelector(state => state.simon.playerSequence)
    const playerTurn = useSelector(state => state.main.playerTurn)

    const sound = require(`./sounds/sound-${color}.wav`).default
    const buttonStyle = {
        width: '150px', height: '150px',
        margin: '5px',
        borderRadius: radius
    }

    // To cheat - print sequence (once)
    if (color == "success") {console.log(originalSequence)}

    // -------------------------------------
    const handleClickButton = () => {

        // Playing sound
        document.getElementById(`sound-${color}`).play()

        dispatch(addToPlayerSequence(color))

        if (playerSequence.length == originalSequence.length) {
            dispatch(endPlayerSequence())
            dispatch(nextPlayer())
        }

        if (!checkMatchSequence(playerSequence, originalSequence)) {

            if (playerTurn == 1) {
                dispatch(setWinner("Player 2"))
            } else {
                dispatch(setWinner("Player 1"))
            }
            dispatch(gameOver())
        }

    }

    return (
        <div>
            <button
                className={`btn btn-${color}`}
                style={buttonStyle}
                disabled={buttonsAreDisabled}
                onClick={handleClickButton}
            >

            </button>

            <audio id={`sound-${color}`}>
                <source src={sound}></source>
            </audio>

        </div>

    )
}


export default SimonButton