import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

// ------------------------------------------------------------------------------------------------
// Memory Game main component
// Code and logic pick from previous memory created in React Native
// See -> https://github.com/JeremyLavigne/Memory-Native
// ------------------------------------------------------------------------------------------------
const Memory = () => {

  const cards = useSelector(state => state.memory.cards)
 

  return (

    <div className="container d-flex flex-wrap justify-content-center">

      {cards.map(card => 
        <Card key={card.id} card={card}/>
      )}

    </div>

  )
}


export default Memory