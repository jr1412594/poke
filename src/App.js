import React, { Component } from 'react'
import './App.css';
import PokemonContainer from './components/PokemonContainer';
// import SearchBar from './components/SearchBar';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'

class App extends Component {

  state = {
    pokemons : [],
    // search : ''
  }

  componentDidMount(){
    const pokeURLS = []
    fetch(baseUrl)
    .then(response => response.json())
    .then(allPokemon => {
      allPokemon.results.forEach(pokemon => {
        fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemon => {
          pokeURLS.push(pokemon)
        })
      })
    })
    let sorted = pokeURLS.sort((a, b) => a.id - b.id)
    this.setState({pokemons : sorted})
    console.log('mounted!')
  }
  
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name] : value})
  }

  filteredPokemon = () => {
    return this.state.pokemons.filter(pokemon => {
      if(this.state.search === ''){
        return true
      } else {
        return pokemon.name.toLowerCase().includes(this.state.search.toLowerCase())
      }
    })
  }
  
  render() {
    
    // const { search } = this.state
    return (
      <div className="App">
        <h1 className='page-title'>Pokémon</h1>
        {/* <div>
        <SearchBar handleChange={ this.handleChange } search={ search }/>
        </div> */}
        <PokemonContainer pokemons={ this.state.pokemons }/>
        {/* <PokemonContainer pokemons={ this.filteredPokemon() }/> */}
      </div>
    );
  }
}

export default App;
