import React from 'react'

export default function Card({ pokemon }) {
    return (
        <div className='pokemon-card'>
            <div className='card-head'>
                <h3 className='pokemon-name'>{ pokemon.name }</h3>
                <h3>{ pokemon.types[0].type.name }</h3>
            </div>
            <div className='image-div'>
                <img
                    src={ pokemon.sprites.front_default}
                    alt={ pokemon.id }
                    />
            </div>
            <div className='specs'>
                <h3>Height: { pokemon.height }</h3>
                <h3>Weight: { pokemon.weight }</h3>
                <h3 clssName='experience'>Xp: { pokemon.base_experience }</h3>
            </div>
        </div>
    )
}
