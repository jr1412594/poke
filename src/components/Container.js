import Card from './Card'

export default function Container({ pokemons }) {

    console.log('container : ', pokemons)
    const displayPokemon = () => {
        if(pokemons === undefined){
            return 'Loading'
        } else { 
        return pokemons.map(pokemon => (
            <Card pokemon={ pokemon } key={ pokemon.id } />
        ))
    }}

    return(
        <div className='card-container'>
            { displayPokemon() }
        </div>
    )
}