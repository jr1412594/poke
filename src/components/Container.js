import Card from './Card'

export default function Container({ pokemons }) {

    console.log('container : ', pokemons)
 
    const displayPokemon = () => (
        pokemons.map(pokemon => (
            <Card pokemon={ pokemon } key={ pokemon.id } />
        ))
    )

    return(
        <div>
            Container
            { displayPokemon() }
        </div>
    )
}