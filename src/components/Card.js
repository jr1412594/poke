import React from 'react'

export default function Card({ pokemon }) {
    return (
        <div className='pokemon-card'>
            <h1 className='pokemon-name'>{ pokemon.name }</h1>
            <img
                src={ pokemon.sprites.front_default}
                alt={ pokemon.id }
            />
        </div>
    )
}
