import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'

// ------------------------------------------------------------------------------------------------
// Memory Game main component
// Code and logic pick from previous memory created in React Native
// See -> https://github.com/JeremyLavigne/Memory-Native
// ------------------------------------------------------------------------------------------------
const Memory = () => {

  const cardBack = require('./images/cardBack.png')
  //const dispatch = useDispatch()
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


// Code from my React Native Memory -> Pick ideas and code here.

/*


export default function Game(props) {


    const [ count, setCount] = useState(0)
    const [ gameOver, setGameOver] = useState(false)


    // -------------------------------------------------------------------------
    // Turn the clicked card and disabled it
    const tryACard = (cardId) => {
        const cards = [...playingCards]
        const newPlayingCards = cards.map((card) => (Number(card.id) === Number(cardId)) ?
            { id: card.id, pairId: card.pairId, image: card.image, hidden: false, disabled: "disabled", isTried: true, isSucceded: false} :
            card )
        if (checkWin()) {
            setGameOver(true)
        }
        return newPlayingCards
    }

    // Turn back the missed ones
    const turnBackMissedAndTryACard = (cardId) => {
        const cards = [...playingCards]

        const newPlayingCards = cards.map((card) => card.isTried ?
            { id: card.id, pairId: card.pairId, image: card.image, hidden: true, disabled: null, isTried: false, isSucceded: false} :
            card )

        return newPlayingCards.map((card) => (Number(card.id) === Number(cardId)) ?
        { id: card.id, pairId: card.pairId, image: card.image, hidden: false, disabled: "disabled", isTried: true, isSucceded: false} :
        card )
    }

    //
    const validatePairAndTryACard = (cardId) => {
        const cards = [...playingCards]

        const newPlayingCards = cards.map(card => (card.isTried) ?
        { id: card.id, pairId: card.pairId, image: card.image, hidden: false, disabled: "disabled", isTried: false, isSucceded: true} :
            card)

        return newPlayingCards.map((card) => (Number(card.id) === Number(cardId)) ?
        { id: card.id, pairId: card.pairId, image: card.image, hidden: false, disabled: "disabled", isTried: true, isSucceded: false} :
        card )
    }

    // Return true if the two returned cards form a pair
    const pairFound = () => {
        const cards = [...playingCards]

        const returnedCards = cards.filter(card => card.isTried ? card : null)
        return (returnedCards[0].pairId === returnedCards[1].pairId)

    }

    const checkWin = () => {
         for (let i = 0; i < playingCards.length-1 ; i++) {
            if (playingCards[i].hidden) {
                return false
            }
        }
        return true
    }


    // -------------------------------------------------------------------------
    const handlePressCard = (cardId) => {

        if (count < 2) {
            setPlayingCards(tryACard(cardId))
            setCount(count + 1)
        } else {
            if (pairFound()) {
                setPlayingCards(validatePairAndTryACard(cardId))
                setCount(1)
            } else {
                setPlayingCards(turnBackMissedAndTryACard(cardId))
                setCount(1)
            }
        }
    }

}


*/