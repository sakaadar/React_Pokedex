import { useState, useEffect } from 'react';
import PokemonCard from './Components/PokemonCard';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const limit = 20;
      const offset = pageNumber * limit;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      const data = await response.json();

      const detailedList = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );

      setPokemonList(detailedList);
    }
    fetchData();
  }, [pageNumber]);

  return (
    <div className="app">
      <h1>My Pokédex</h1>
      <div className="pagination">
        <button onClick={() => setPageNumber((prev) => Math.max(prev - 1, 0))} disabled={pageNumber === 0}>
          Previous
        </button>
        <span>Page {pageNumber + 1}</span>
        <button onClick={() => setPageNumber((prev) => prev + 1)}>Next</button>
      </div>

      <div className="pokemon-grid">
        {pokemonList.map((poke) => (
          <PokemonCard
            key={poke.id}
            id={poke.id}
            name={poke.name}
            image={poke.sprites.front_default}
            type={poke.types[0].type.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
