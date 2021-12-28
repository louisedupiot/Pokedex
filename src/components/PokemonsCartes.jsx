import React from 'react'

const PokemonsCartes = ({id, name, image, type, weight, height, abilities}) => {

    const style = `cartes ${type}`
    return (
        <div className={style}>
            <div className='num'>
                <small>n°{id}</small>
            </div>
            <img src={image} alt={name}/>
            <div className='details'>
                <h3>{name}</h3>
                <small className='details'>Type: {type}</small>
                <small className='details'>Poids: {weight}</small>
                <small className='details'>Taille: {height}</small>
                <small className='details'>Capacités: {abilities.map((index)=> <li key={id++}>{index.ability.name}</li>)}</small>
               
            </div>

        </div>
    )
}

export default PokemonsCartes;