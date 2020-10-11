import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextPlayer, setWinner, gameOver } from '../reducers/mainReducer'
import { tryCard, increaseCount, initCount, validatePair, turnBackMissed, increasePlayerPoints } from '../reducers/memoryReducer'
import { pairFound, checkWin } from './utils/functions'


// ------------------------------------------------------------------------------------------------
// One Card (of 20) form the memory game
// ------------------------------------------------------------------------------------------------
const Card = ({card}) => {

  const dispatch = useDispatch()
  const cardBack = require('./images/cardBack.png')
  const image = require(`./images/card${card.image + 1}.png`)
  const count = useSelector(state => state.memory.count)
  const cards = useSelector(state => state.memory.cards)
  const player1points = useSelector(state => state.memory.player1points)
  const player2points = useSelector(state => state.memory.player2points)
  const playerTurn = useSelector(state => state.main.playerTurn)
  


  const handleClickCard = () => {

    if (count < 2) {
      dispatch(tryCard(card.id))
      dispatch(increaseCount())

    } else {

        if (pairFound(cards)) {

          // Not so good, point is send one click after winning, means also 
          // that one more click has to be done to end the game.
          // That is why the point goes to the player which is not currently clicking
          dispatch(increasePlayerPoints(playerTurn == 1 ? 2 : 1))

          dispatch(validatePair())
          dispatch(initCount())

          dispatch(tryCard(card.id))
          dispatch(increaseCount())

        } else {

          dispatch(turnBackMissed())
          dispatch(initCount())

          dispatch(tryCard(card.id))
          dispatch(increaseCount())

        }
    }

    if (checkWin(cards)) {
      if (player1points > player2points) {
        dispatch(setWinner("Player 1"))
      } 
      if (player1points < player2points){
        dispatch(setWinner("Player 2"))
      }
      dispatch(gameOver())
    }


    if (count == 1) {dispatch(nextPlayer())}


  }

  return (

        <div className="m-1 bg-light"
            style={styles.memoCard}
            onClick={() => handleClickCard(card.id)}
        >
          {card.hidden ?
            <img
              style={styles.image}
              src={cardBack}
            />
            :
            <img
              style={styles.image}
              src={image}
              disabled={card.disabled}
            />
          }
        </div>

  )
}

const styles = {
  title: {
      fontSize: 27,
      textAlign: 'center'
  },
  image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain'
  },
  memoCard: {
      height : '80px',
      width : '16%',
      cursor : 'pointer'
      //resizeMode: 'contain'
  }
}

export default Card

