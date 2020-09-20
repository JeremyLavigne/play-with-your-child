import React from 'react'
import Box from './Box'


// ------------------------------------------------------------------------------------------------
const Tictactoe = () => {

  return (

    <div className="container">
        <div className="row flex-nowrap justify-content-center">
            <Box boxNumber={1} />
            <Box boxNumber={2} />
            <Box boxNumber={3} />
        </div>
        <div className="row flex-nowrap justify-content-center">
            <Box boxNumber={4} />
            <Box boxNumber={5} />
            <Box boxNumber={6} />
        </div>
        <div className="row flex-nowrap justify-content-center">
            <Box boxNumber={7} />
            <Box boxNumber={8} />
            <Box boxNumber={9} />
        </div>

    </div>

  )
}

export default Tictactoe