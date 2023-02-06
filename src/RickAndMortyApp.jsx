import './App.css'
import useLocation from './hooks/useLocation'
import LocationCard from './components/LocationCard'
import CharacterCard from './components/CharacterCard/CharacterCard'
import InputSearch from './components/InputSearch/InputSearch'
import { useState } from 'react'
import Footer from './components/Footer'
import Pagination from './components/Pagination'
import usePaginationLogic from './hooks/usePaginationLogic'


function RickAndMortyApp() {

  
  //estado de la busqueda asignada 
  const [searchedValue, setSearchedValue] = useState()
 
  //Paginacion
    const [currentPage, setCurrentPage] = useState(1)

  //hook que hace el llamado a la API de la ubicacion
  const {location} = useLocation(searchedValue)

  let paginationResponse

  //condicional para usar paginacion
  if(location !== undefined){
    paginationResponse = usePaginationLogic(currentPage, location)
  }


  //Creacion de la lista de cartas de personaje 
  //Usando el array residents recibimos la informacion de los personajes y la mandamos por prop

  const people = paginationResponse?.arrayResidents.map(resident => (
        <CharacterCard 
        resident={resident}
        key = {resident}
        />
    ))


  //Funcion que otorga el estado nuevo para hacer la peticion useLocation
    const handlerClick = (e) =>{
      e.preventDefault()
      setSearchedValue(e.target.value)
    }


  //Contenido renderizado
  //Header con la barra de busqueda
  //Carta de descripccion de la locacion
  //Cartas de personajes
  return (
    <div className="App">
      <header className='header'>
        <InputSearch  
        handlerClick ={handlerClick}
        />
      </header>
      
      <LocationCard location={location}/>


      <main className='list'>
        {
          people
        }
      </main>

      <Pagination
      arrayPages={paginationResponse?.arrayPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      quantityPages={paginationResponse?.quantityPages}
      />

      <Footer/>
    </div>
  )
  
}

export default RickAndMortyApp
