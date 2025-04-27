import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PokemonDetail(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchPokemon() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemon(data);
        }

        fetchPokemon();
    }, [id]); 
    
    if(!pokemon) return <div>Loading...</div>;
    return(
        <div className="detail-page">
            <button onClick={() => navigate(-1)} Back ></button>

            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p><strong>Type:</strong> {pokemon.types.map((t) => t.type.name).join(', ')}</p>
            <p><strong>Height:</strong> {pokemon.height}</p>
            <p><strong>Weight:</strong> {pokemon.weight}</p>
        </div>
    );
}

export default PokemonDetail;