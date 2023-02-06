import React, { useState } from 'react'
import useAllLocations from '../../hooks/useAllLocations'
import Loader from '../Loader/Loader'
import './InputSearch.css'

const InputSearch = ({ handlerClick }) => {   

  //Estado del input
  
  const [inputValue, setInputValue] = useState('')

  //Llamado al hook con info de todas las locaciones 
  const {allLocations, isLoading} = useAllLocations(inputValue) 


//Creacion de la lista de nombres sugerencia del buscador
  const allNames = allLocations?.map(locationSrc => (
    <button  
    onClick ={(e)=>{
      handlerClick(e)
      setInputValue('')
    }} 
    key={locationSrc.url}
    value={locationSrc.id}
    >
    {locationSrc.name}
    </button>
  )
  )

//contenido renderizado
//input con funcion para otorgar el valor del input a la busqueda de locacion
  return (
    <form className='container-location'>
        <input 
        type="text" 
        placeholder='Consulta otra locación' 
        className='input-location'
        onChange={(e) => setInputValue(e.target.value)}/>
        
        {
          isLoading ?
          <Loader/> :
          <div className='list-all-names'>
           { allLocations && inputValue?.length > 0 ? allNames : null } 
          </div>
        }
    </form>
  )
}

export default InputSearch