import React from 'react'

export default function SearchBar({ handleChange }) {
    return (
        <div>
            <input 
                // type='text' 
                name='search'
                placeholder='search'
                onChange={ handleChange }
            />
        </div>
    )
}
