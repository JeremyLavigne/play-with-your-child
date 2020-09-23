import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startOriginalSequence, endOriginalSequence, startPlayerSequence,
    addToOriginalSequence, initPlayerSequence, increaseSequenceTime } from '../reducers/simonReducer'

import {generateRandomColor} from './utils/functions'


// ------------------------------------------------------------------------------------------------
// Black circle in the middle - Display user informations / instructions
// ------------------------------------------------------------------------------------------------
const MiddleInfo = () => {

    const dispatch = useDispatch()

    const sequenceDuration = useSelector(state => state.simon.sequenceDuration)
    const originalSequenceIsPlaying = useSelector(state => state.simon.originalSequenceIsPlaying)
    const playerSequenceIsPlaying = useSelector(state => state.simon.playerSequenceIsPlaying)
    const originalSequence = useSelector(state => state.simon.originalSequence)

    // -------------------------------------
    const handleClickReady = () => {

        // Erase previous player Sequence
        dispatch(initPlayerSequence())
        // Add a new sound to the original sequence
        dispatch(addToOriginalSequence(generateRandomColor()))
        dispatch(increaseSequenceTime(500)) 

        dispatch(startOriginalSequence())

        // Playing sequence :
        for (let i = 0; i < originalSequence.length; i++) {
            
            setTimeout(() =>{ 
                document.getElementById(`sound-${originalSequence[i]}`).play()

                document.getElementById(`button-${originalSequence[i]}`).style.border = "5px solid white"

                setTimeout(() =>{ 
                    document.getElementById(`button-${originalSequence[i]}`).style.border = ""
                }, 300)

            }, 500 + i*500)
        }

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