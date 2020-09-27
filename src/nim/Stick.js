import React from 'react'


// ------------------------------------------------------------------------------------------------
// One Card (of 20) form the memory game
// ------------------------------------------------------------------------------------------------
const Stick = ({number}) => {

    const image = require('./images/stick.png')

    const divStyle = {
        width : '6%'
    }

    const stickStyle = {
        maxHeight : '300px'
    }

  return (

        <div className="d-flex flex-column" style={divStyle}>

            <p className="text-success text-center"><i className="fas fa-sort-down fa-2x"></i></p>

            <img src={image} style={stickStyle}/>

            <p className="text-light">{number}</p>

        </div>

  )
}


export default Stick

