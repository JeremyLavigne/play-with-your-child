import React, { useState } from 'react'


// ------------------------------------------------------------------------------------------------
const PlayerBoard = ({playerName}) => {

    const [name, setName] = useState(playerName)
    const [changingName, setChangingName] = useState(false)

    return (

    <div className="container d-flex justify-content-center">
        {changingName ?
            <div className="input-group input-group-sm flex-nowrap">
                <input 
                    value={name}
                    onChange={(event) => setName(event.currentTarget.value)}
                /> 
                <button 
                className="btn btn-sm"
                onClick={() => setChangingName(false)}
                > 
                    <i className="fas fa-check"></i>
                </button>
            </div>
            :
            <div className="d-flex">
                {name}
                <button 
                    className="btn btn-sm"
                    onClick={() => setChangingName(true)}
                > 
                    <i className="fas fa-pencil-alt"></i> 
                </button>
            </div>
        }
    </div>


    )
}

export default PlayerBoard