import React, { Component } from 'react'
import './App.css';
// import Container from './components/Container';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'

class App extends Component {

  state = {
    pokemon : []
  }

  fetchPokemonData(pokemon) {
    let url = pokemon.url

    fetch(url)
    .then(response => response.json())
    .then(function(pokeData) {
      console.log(pokeData)
    })
  }
  componentDidMount(){
    fetch(baseUrl)
    .then(response => response.json())
    .then(function(allPokemon) {
      allPokemon.results.forEach(pokemon => {
        console.log(pokemon.url)
        fetch(pokemon.url)
        .then(response => response.json())
        .then(result => this.setState({pokemon : [...this.state.pokemon, result]}))
      })
    })
  }
  
    
    render() {
      return (
        <div className="App">
        
        {/* <h1>{console.log('this is my pokemon key',this.state.pokemon)}</h1> */}
        hello!
        {/* <Container pokemon={ this.state.pokemon }/> */}
      </div>
    );
  }
}

export default App;
