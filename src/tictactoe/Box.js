import React from 'react'


// ------------------------------------------------------------------------------------------------
const Box = () => {

    const boxStyle = { 
        height: '100px', width: '100px',
        minHeight: '50px', minWidth: '50px'
    }

    return (

        <div 
            className="border bg-light d-flex justify-content-center align-items-center" 
            style={boxStyle}
        >
            x
        </div>

    )
}

export default Box