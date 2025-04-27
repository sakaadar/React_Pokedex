import { useNavigate } from "react-router-dom";
function PokemonCard({name, image,id,type}){
    const navigate = useNavigate();
    return(
        <div className={`pokemon-card ${type}`} onClick={() => navigate(`/pokemon/${id}`)}>
           <div className="pokemon-card">
            <p className="pokemon-id">#{id}</p>
            <h2 className="pokemon-name">{name}</h2>
            <img src={image} alt={name}/>
           </div>
        </div>
    );
}

export default PokemonCard;