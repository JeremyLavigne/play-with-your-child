import React from 'react'
import Box from './Box'


// ------------------------------------------------------------------------------------------------
const Tictactoe = () => {

  return (

    <div className="container">
        <div className="row flex-nowrap justify-content-center">
            <Box />
            <Box />
            <Box />
        </div>
        <div className="row flex-nowrap justify-content-center">
            <Box />
            <Box />
            <Box />
        </div>
        <div className="row flex-nowrap justify-content-center">
            <Box />
            <Box />
            <Box />
        </div>
    </div>
  )
}

export default Tictactoe