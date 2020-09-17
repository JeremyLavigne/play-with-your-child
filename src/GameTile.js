import React from 'react'

const GameTile = ({ title, name, image, setOpenGame}) => {

    const handleClickPlay = () => {
        setOpenGame(name)
    }

    return (

        <div className="col-5 col-md-3 m-1 px-0">

            <div className="card p-1">

                <div className="card-header">{title}</div>

                <img src={image} className="card-img p-3" alt="game-overview" />

                <div className="card-body text-center">
                    <button 
                        className="btn btn-sm btn-primary"
                        onClick={handleClickPlay}
                    >
                        Play
                    </button>
                </div>
            </div>

        </div>

    )
}

export default GameTile