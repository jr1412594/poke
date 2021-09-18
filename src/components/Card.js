import React from 'react'

export default function Card({ pokemon }) {
    return (
        <div>
            <h1>{ pokemon.name }</h1>
            <img
                src={ pokemon.sprites.back_default}
                alt={ pokemon.id }
            />
        </div>
    )
}
