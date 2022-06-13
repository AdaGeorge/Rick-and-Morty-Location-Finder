import axios from "axios"
import { useEffect, useState } from "react"

const useCharacter = (resident) => {

    //Estado de el personaje
    const [character, setCharacter] = useState()
    const [isLoading, setIsLoading] = useState(true)

    //Llamada a la API usando el parametro de location 'residents'
    useEffect(()=>{
        axios.get(resident)
         .then((res)=>{
             setCharacter(res.data)
             setIsLoading(false)
         })
         .catch((err)=>{
             console.log(err)
         })
    },[])

  return {character, isLoading}
}

export default useCharacter