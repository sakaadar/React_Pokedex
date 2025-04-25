//import { useState } from 'react'
import './App.css';
import PokemonCard from './Components/PokemonCard';

function App() {
  return (
   <div className="app">
    <h1>My Pokedex</h1>
   <PokemonCard 
      name="Pikachu"
      image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    />
    </div>
  );
}
export default App
