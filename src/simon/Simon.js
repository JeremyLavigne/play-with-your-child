import React from 'react'

import MiddleInfo from './MiddleInfo'
import SimonButton from './SimonButton'


// ------------------------------------------------------------------------------------------------
// Simon Game main component
// ------------------------------------------------------------------------------------------------
const Simon = () => {

  return (

    <div className="container text-light">

      <div className="row flex-nowrap justify-content-center">
        <SimonButton color="success" radius='100% 0 0 0'/>
        <SimonButton color="danger" radius='0 100% 0 0'/>

      </div>
      <div className="row flex-nowrap justify-content-center">
        <SimonButton color="info" radius="0 0 0 100%"/>
        <SimonButton color="warning" radius="0 0 100% 0"/>
      </div>

      <MiddleInfo />

    </div>

  )
}

export default Simon