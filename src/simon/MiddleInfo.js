import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startOriginalSequence, endOriginalSequence, startPlayerSequence,
    addToOriginalSequence, initPlayerSequence } from '../reducers/simonReducer'

import {generateRandomColor} from './utils/functions'


// ------------------------------------------------------------------------------------------------
// Black circle in the middle - Display user informations / instructions
// ------------------------------------------------------------------------------------------------
const MiddleInfo = () => {

    const dispatch = useDispatch()

    const sequenceDuration = useSelector(state => state.simon.sequenceDuration)
    const originalSequenceIsPlaying = useSelector(state => state.simon.originalSequenceIsPlaying)
    const playerSequenceIsPlaying = useSelector(state => state.simon.playerSequenceIsPlaying)

    const handleClickReady = () => {

        dispatch(initPlayerSequence())
        dispatch(addToOriginalSequence(generateRandomColor()))
        dispatch(startOriginalSequence())

        setTimeout(() =>{
            dispatch(endOriginalSequence())
            dispatch(startPlayerSequence())
        }, sequenceDuration)
    }

    return (

        <div className="bg-dark d-flex align-items-center justify-content-center" style={simonStyle}>
            { originalSequenceIsPlaying ? 
                <p className="container text-center">Memorise</p>

                : playerSequenceIsPlaying ? 

                <p className="container text-center">Repeat</p>

                :
                <button
                    className="btn btn-light btn-sm"
                    onClick={handleClickReady}
                >
                    Ready ?
                </button>
            }
        </div>

    )
}

const simonStyle = {
    position: 'absolute',
    left: '50%', bottom: '50%',
    marginLeft: '-50px', marginBottom: '-50px',
    width: '100px', height: '100px',
    borderRadius: '50%'
}

export default MiddleInfo