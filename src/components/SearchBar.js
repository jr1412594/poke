import React from 'react'

export default function SearchBar({ handleChange, search }) {
    return (
        <div>
            <input 
                // type='text' 
                name='search'
                placeholder='search'
                value ={ search }
                onChange={ handleChange }
            />
        </div>
    )
}
