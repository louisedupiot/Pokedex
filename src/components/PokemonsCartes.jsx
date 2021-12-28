import React from 'react'

const PokemonsCartes = ({id, name, image, type}) => {
    return (
        <div className='cartes'>
            <div className='num'>
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name}/>
            <div className='details'>
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>

        </div>
    )
}

export default PokemonsCartes