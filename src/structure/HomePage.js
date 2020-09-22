import React from 'react'

import GameTile from './GameTile'

// ------------------------------------------------------------------------------------------------
// Home page - first visible for user - offers choice between games
// ------------------------------------------------------------------------------------------------
const HomePage = () => {

  return (

    <div className="container">

      <div className="row d-flex justify-content-around mt-5">

        <GameTile
          title="Tic Tac Toe"
          image={require('../images/tic-tac-toe.png')}
        />
        <GameTile
          title="Simon Game"
          image={require('../images/simon.png')}
        />
        <GameTile
          title="Memory"
          image={require('../images/memory.png')}
        />
        <GameTile
          title="Nim's Game"
          image={require('../images/nim.png')}
        />
        <GameTile
          title="Connect 4"
          image={require('../images/connect.png')}
        />
        <GameTile
          title="Unknown"
          image={require('../images/unknown.png')}
        />

      </div>

    </div>
  )
}

export default HomePage