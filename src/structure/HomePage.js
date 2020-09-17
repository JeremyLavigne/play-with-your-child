import React from 'react'
import GameTile from './GameTile'

const HomePage = ({ setOpenGame }) => {

  return (

    <div className="container">

      <div className="row d-flex justify-content-around">

        <GameTile
          title="Tic Tac Toe"
          name="ticTacToe"
          image={require('../images/tic-tac-toe.png')}
          setOpenGame={setOpenGame}
        />
        <GameTile
          title="Simon Game"
          name="simonGame"
          image={require('../images/tic-tac-toe.png')}
          setOpenGame={setOpenGame}
        />
        <GameTile
          title="Memory"
          name="memory"
          image={require('../images/tic-tac-toe.png')}
          setOpenGame={setOpenGame}
        />
        <GameTile
          title="Nim's Game"
          name="nimsGame"
          image={require('../images/tic-tac-toe.png')}
          setOpenGame={setOpenGame}
        />
        <GameTile
          title="Power 4"
          name="power4"
          image={require('../images/tic-tac-toe.png')}
          setOpenGame={setOpenGame}
        />
        <GameTile
          title="Goose Game"
          name="gooseGame"
          image={require('../images/tic-tac-toe.png')}
          setOpenGame={setOpenGame}
        />

      </div>

    </div>
  )
}

export default HomePage