import React from 'react'
import { useDispatch } from 'react-redux'
import { openOneGame } from '../reducers/mainReducer'


// ------------------------------------------------------------------------------------------------
const GameTile = ({ title, image }) => {

    const dispatch = useDispatch()

    const handleClickPlay = () => {
        dispatch(openOneGame(title))
    }

    return (

        <div className="col-5 col-md-3 m-2 px-1">

            <div className="card p-1 bg-dark">

                <div className="card-header text-center text-dark bg-light">{title}</div>

                <img src={image} className="card-img p-3" alt="game-overview" />

                <div className="card-body text-center">
                    <button 
                        className="btn btn-sm btn-primary"
                        onClick={handleClickPlay}
                    >
                        Play
                    </button>
                </div>
            </div>

        </div>

    )
}

export default GameTile