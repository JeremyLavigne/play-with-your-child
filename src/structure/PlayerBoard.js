import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {changePlayerName} from '../reducers/mainReducer'


// ------------------------------------------------------------------------------------------------
const PlayerBoard = ({playerNumber}) => {

    // Change display when user wants to change name (e.g. show input field)
    const [changingName, setChangingName] = useState(false)
    // newName variable only used when changing name, then name go in redux store
    const [newName, setNewName] = useState("")

    const dispatch = useDispatch()
    const name = (playerNumber == 1 ? useSelector(state => state.main.player1Name) : useSelector(state => state.main.player2Name))
    const yourTurn = useSelector(state => state.main.playerTurn)


    const handleChangeName = () => {
        setChangingName(false)

        if (newName == "") { dispatch(changePlayerName(playerNumber, `Player ${playerNumber}`))}
        else {dispatch(changePlayerName(playerNumber, newName))}

        setNewName("")
    }

    return (

    <div className="container d-flex flex-column align-items-center">
        {changingName ?
            <div className="input-group input-group-sm flex-nowrap">
                <input 
                    value={newName}
                    onChange={(event) => setNewName(event.currentTarget.value)}
                /> 
                <button 
                className="btn btn-sm"
                onClick={handleChangeName}
                > 
                    <i className="fas fa-check"></i>
                </button>
            </div>
            :
            <div className="d-flex">
                <strong>{name}</strong>
                <button 
                    className="btn btn-sm"
                    onClick={() => setChangingName(true)}
                > 
                    <i className="fas fa-pencil-alt"></i> 
                </button>
            </div>
        }
        <div>
            { yourTurn == playerNumber ?
                <p className="bg-success p-3 mt-4 rounded">Your turn</p>
                :
                null
            }
        </div>
    </div>


    )
}

export default PlayerBoard
