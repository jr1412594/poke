import React, { Component } from 'react'
import './App.css';
import Container from './components/Container';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon?offset=100&limit=100'

class App extends Component {

  state = {
    pokemon : []
  }

  componentDidMount(){
    fetch(baseUrl)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon : pokemon.results }))
    }
    
    render() {
      return (
        <div className="App">
        
        <h1>{console.log('this is my pokemon key',this.state.pokemon)}</h1>
        hello!
        <Container pokemon={ this.state.pokemon }/>
      </div>
    );
  }
}

export default App;
