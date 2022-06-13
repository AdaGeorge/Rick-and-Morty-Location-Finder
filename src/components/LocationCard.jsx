import React from 'react'

//Tarjeta con informacion de la location 
const LocationCard = ({location}) => {
  return (
    <article className='location-card'>
        <h2>{location?.name}</h2>
        <div className='location-card-description'>
            <h3><span>Type:</span> {location?.type}</h3>
            <h3><span>Dimension:</span> {location?.dimension}</h3>
            <h3><span>Residents: </span> {location?.residents.length}</h3>
        </div>
    </article>
  )
}

export default LocationCard