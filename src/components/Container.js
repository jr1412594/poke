import Card from './Card'

export default function Container({ pokemons }) {
    console.log('container actual: ', pokemons)
    const displayPokemon = () => {
            return pokemons.map(pokemon => {
                return <Card pokemon={ pokemon } key={ pokemon.id } />
            })
    }

    return(
        <div className='card-container'>
            { displayPokemon() }
        </div>
    )
}