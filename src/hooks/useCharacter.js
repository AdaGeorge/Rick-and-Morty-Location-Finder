import axios from "axios"
import { useEffect, useState } from "react"

const useCharacter = (resident) => {

    const [character, setCharacter] = useState()
    const [isLoading, setIsLoading] = useState(true)

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