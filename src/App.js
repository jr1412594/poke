import React, { Component } from 'react'
import './App.css';
import Container from './components/Container';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'

class App extends Component {

  state = {
    pokemons : []
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
      this.setState({pokemons : pokeURLS})
    })
  }
  
    
    render() {
      return (
        <div className="App">
        
        hello!
        <Container pokemons={ this.state.pokemons }/>
      </div>
    );
  }
}

export default App;
