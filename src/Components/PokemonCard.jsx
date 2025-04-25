function PokemonCard({name, image}){
    return(
        <div className="pokemon-card">
            <h3>{name}</h3>
            <img src={image} alt={name} className={name}/>
            </div>
    );
}

export default PokemonCard;