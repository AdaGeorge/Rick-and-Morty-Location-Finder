import axios from "axios";
import { useEffect, useState } from "react";


const useLocation = (searchedValue) => {

    const [location, setLocation] = useState()

    useEffect(() => {

      let locationNumber

      if(searchedValue !== undefined){
        locationNumber = searchedValue
      }else{
        locationNumber = Math.ceil(Math.random() * 126)
      }

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