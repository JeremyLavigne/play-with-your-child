import React from 'react'
//import { useSelector } from 'react-redux'


// ------------------------------------------------------------------------------------------------
const GameOverMsg = ({newGame}) => {

    return (

        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <p>Game Over</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={newGame}>New Game</button>
                </div>
            </div>
        </div>

    )
}

export default GameOverMsg