import axios from "axios";
import { useEffect, useState } from "react";


const useLocation = (searchedValue) => {

  // Estado de la llamada a location
    const [location, setLocation] = useState()


    
    useEffect(() => {

      let locationNumber

      //condicional para definir de donde viene la informacion
      if(searchedValue !== undefined){
        locationNumber = searchedValue
      }else{
        locationNumber = Math.ceil(Math.random() * 126)
      }

      //Llamada a la API
      const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`
      axios.get(URL)
        .then((res)=>{
          setLocation(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
    
        
    }, [searchedValue])
    
  return {location}
}

export default useLocation