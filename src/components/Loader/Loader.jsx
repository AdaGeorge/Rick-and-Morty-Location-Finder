import React from 'react'
import './Loader.css'

//Elemento de carga
const Loader = () => {
  return (
    <div className="lds-ripple">
        <div></div>
        <div></div>
    </div>
  )
}

export default Loader