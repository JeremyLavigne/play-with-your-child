import React from 'react'
import { useSelector } from 'react-redux'

import HomePage from './structure/HomePage'
import BoardGame from './structure/BoardGame'


// ------------------------------------------------------------------------------------------------
const App = () => {

  const openGame = useSelector(state => state.openGame)

  return (

    <div>
      { openGame === "none" ?

        <HomePage />

        :

        <BoardGame />

      }
    </div>
  )
}

export default App