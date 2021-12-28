import React from 'react'

const PokemonsCartes = ({id, name, image, type, type2, weight, height, abilities}) => {

    const style = `cartes ${type2}`
    return (
        <div className={style}>
            <div className='num'>
                <small>n°{id}</small>
            </div>
            <img src={image} alt={name}/>
            <div className='details'>
                <h3>{name}</h3>
                
                <small className='details'> <b>Poids</b> {weight}</small>
                <small className='details'><b>Taille</b> {height}</small>
                <small className='details'><b>Type</b> {type.map((index)=> <li key={id++}>{index.type.name}</li>)}</small>
                <small className='details'><b>Capacités</b> {abilities.map((index)=> <li key={id++}>{index.ability.name}</li>)}</small>
               
            </div>

        </div>
    )
}

export default PokemonsCartes;