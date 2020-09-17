import React, { useState } from 'react'
import HomePage from './structure/HomePage'
import BoardGame from './structure/BoardGame'

const App = () => {

  const [openGame, setOpenGame] = useState("none")

  return (

    <div>
      { openGame === "none" ?

        <HomePage setOpenGame={setOpenGame} />

        :

        <BoardGame game={openGame} setOpenGame={setOpenGame}/>

      }
    </div>
  )
}

export default App