import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// ------------------------------------------------------------------------------------------------
// One Card (of 20) form the memory game
// ------------------------------------------------------------------------------------------------
const Card = ({card}) => {

  const cardBack = require('./images/cardBack.png')
  const image = require(`./images/card${card.image + 1}.png`)


  const handleClickCard = () => {
    console.log("click", card.id)
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
      width : '16%'
      //resizeMode: 'contain'
  }
}

export default Card

