import Card from './Card'

export default function PokemonContainer( props ) {
    console.log('container actual :', props.pokemons)
    const {pokemons} = props.pokemons
    console.log('after props', pokemons)
    // const  displayPokemon = () => {
    //         return pokemons.map(pokemon => {
    //             return <Card key={ pokemon.id } pokemon={ pokemon } />
    //         })
    //     }
        // console.log('display pokemon', displayPokemon())
    return(
        <div className='card-container'>
            sd
            {/* { displayPokemon() } */}
        </div>
    )
}