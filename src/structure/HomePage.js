import React from 'react'

import GameTile from './GameTile'


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
          image={require('../images/tic-tac-toe.png')}
        />
        <GameTile
          title="Memory"
          image={require('../images/tic-tac-toe.png')}
        />
        <GameTile
          title="Nim's Game"
          image={require('../images/tic-tac-toe.png')}
        />
        <GameTile
          title="Power 4"
          image={require('../images/tic-tac-toe.png')}
        />
        <GameTile
          title="Goose Game"
          image={require('../images/tic-tac-toe.png')}
        />

      </div>

    </div>
  )
}

export default HomePage