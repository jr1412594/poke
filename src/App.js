import React, { Component } from 'react'
import './App.css';
// import Container from './components/Container';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'

class App extends Component {

  state = {
    pokemon : []
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
      this.setState({pokemon : pokeURLS})
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
