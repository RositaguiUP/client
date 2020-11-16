import React, { Component } from 'react';


class Pokemon extends Component {
    state = {  }
    render() { 
        const pokemon = this.props.pokemon;

        return (
            <React.Fragment>
                
                <img
                    className="pd50, imgPokemon"
                    src={pokemon.image}
                    alt="First slide"
                />

                <h2>{pokemon.name}</h2>
                <h3>{pokemon.id}</h3>
                <p><b>Type:</b> {pokemon.type}</p>
                <p><b>Experience:</b> {pokemon.baseExperience}</p>
                <section>
                    <p><b>Weight:</b> {pokemon.weight}</p>
                    <p><b>Height:</b> {pokemon.height}</p>
                </section>
                <p><b>Abilities:</b> {pokemon.abilities}</p>
                <p><b>Moves:</b> {pokemon.moves}</p>
                <br/>
                <br/>
            </React.Fragment>
        );
    }
}
 
export default Pokemon;