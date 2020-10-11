import React from 'react'


// ------------------------------------------------------------------------------------------------
// One Card (of 20) form the memory game
// ------------------------------------------------------------------------------------------------
const Stick = ({stick}) => {

    const image = require('./images/stick.png')

    const divStyle = {
        width : '6%'
    }

    const stickStyle = {
        maxHeight : '300px'
    }

  return (

        <div className="d-flex flex-column" style={divStyle}>

            <div className="text-success text-center mb-2">
                {
                    stick.pickable ? <i className="fas fa-sort-down fa-2x"></i> : null
                }
            </div>

            {
                stick.picked ? null : <img src={image} style={stickStyle}/>
            }

        </div>

  )
}


export default Stick

