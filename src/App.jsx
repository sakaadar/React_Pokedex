import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; 
import PokemonCard from './Components/PokemonCard';
import About from './Components/About';  
import PokemonDetail from './Components/PokemonDetail';  
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

      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
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
          </>
        } />

        <Route path="/about" element={<About />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
