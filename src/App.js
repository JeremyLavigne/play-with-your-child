import React from 'react'


const App = () => {

  return (
    <div className="container bg-primary d-flex flex-column justify-content-center" style={{ height: '100vh' }}>

      <div className="container bg-info">
        <p>Play with your child and let him/her decide if I can be a good developer :-)</p>
      </div>

      <div className="container">
        <div className="row bg-primary d-flex justify-content-around">

          <div className="col-5 col-md-3 m-1 bg-success">
            1
          </div>
          <div className="col-5 col-md-3 m-1 bg-success">
            2
          </div>
          <div className="col-5 col-md-3 m-1 bg-success">
            3
          </div>
          <div className="col-5 col-md-3 m-1 bg-success">
            4
          </div>
          <div className="col-5 col-md-3 m-1 bg-success">
            5
          </div>
          <div className="col-5 col-md-3 m-1 bg-success">
            6
          </div>

        </div>
      </div>
    </div>
  )
}

export default App