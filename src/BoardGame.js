import React from 'react'


const BoardGame = ({game, setOpenGame}) => {

  const handleClickBack = () => {
    setOpenGame("none")
  }

  return (

    <div className="container d-flex flex-column justify-content-center" style={{ height: '100vh' }}>

      <div className="container">

          You are playing : {game}

          <button 
            className="btn btn-danger" 
            onClick={handleClickBack}
          > Back </button>

      </div>
    </div>
  )
}

export default BoardGame