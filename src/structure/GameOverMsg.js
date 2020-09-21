import React from 'react'
import { useSelector } from 'react-redux'


// ------------------------------------------------------------------------------------------------
const GameOverMsg = ({newGame}) => {

    const winner = useSelector(state => state.main.winner)
    const player1Name = useSelector(state => state.main.player1Name)
    const player2Name = useSelector(state => state.main.player2Name)

    console.log(winner)

    return (

        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                   
                    { winner == "Player 1" ?
                        <p> Well done {player1Name} !</p>
                        : winner == "Player 2" ?
                        <p> Well done {player2Name} !</p>
                        :
                        <p>It is a draw, try again :)</p>
                    }
                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={newGame}>New Game</button>
                </div>
            </div>
        </div>

    )
}

export default GameOverMsg