import React from 'react'


const BoardGame = ({ game, setOpenGame }) => {

  const handleClickBack = () => {
    setOpenGame("none")
  }

  return (

    <div className="container">

      <header className="container d-flex justify-content-between p-1">
        <p> You are playing : {game} </p>

        <button className="btn btn-sm btn-danger" onClick={handleClickBack} > Back </button>
      </header>

      <div className="container">
        <div className="row">

          <div className="col-6 col-lg-3 bg-primary">
            player 1
          </div>

          <div className="col-6 col-lg-3 order-lg-last bg-primary">
            player 2
          </div>

          <div className="col-12 col-lg-6 bg-warning">
            <h1>board</h1><h1>board</h1><h1>board</h1>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default BoardGame