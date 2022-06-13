import useCharacter from "../../hooks/useCharacter"
import './CharacterCard.css'
import Loader from '../Loader/Loader'


const CharacterCard = ({resident}) => {

 const {character, isLoading} = useCharacter(resident)
 

  return (
    <article className= "character-card">
      {isLoading? 
       <Loader/>:
       <>
       <img src={character.image} alt="image rick and morty character" />
       <h2>{character.name}</h2>
       <span>{character.status}</span>
       <p>Origin: {character.origin.name}</p>
       <p>Episodes where appears: {character.episode.length}</p>
       </>
       }

    </article>
  )
}

export default CharacterCard