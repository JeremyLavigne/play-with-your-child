import React from 'react'
import Stick from './Stick'

// ------------------------------------------------------------------------------------------------
// Nim's Game main component
// ------------------------------------------------------------------------------------------------
const Nim = () => {

  const sticks = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

  return (

    <div className="container d-flex justify-content-center">

      {sticks.map(stick => 
        <Stick key={stick} number={stick}/>
      )}

    </div>

  )
}

export default Nim