import { useEffect, useState } from 'react'
import axios from 'axios'

const useAllLocations = (inputValue) => {
     //Estado de el llamado a la API 'todas las locaciones'
     const [allLocations, setAllLocations] = useState()
     const [isLoading, setIsLoading] = useState(true)
     

     //Llamado a la API para traer todas las locaciones 
     useEffect(()=>{
       const URL = `https://rickandmortyapi.com/api/location/?name=${inputValue}`
       axios.get(URL)
        .then((res)=>{
          //mandamos la informacion al estado y cancelamos el isloading state
          setAllLocations(res.data.results)
          setIsLoading(false)
        }) 
        .catch((err)=>{
          console.log(err)
        })
     }, [inputValue])
     
     return {allLocations, isLoading}
}

export default useAllLocations