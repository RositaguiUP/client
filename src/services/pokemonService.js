import http from './httpService';

const apiEndpoint = "http://localhost:3001/pokemones"

export function getPokemos(){
    return http.get(apiEndpoint);
}

export function getPokemon(pokemonId){
    return http.get(apiEndpoint) + "/" +  pokemonId;
}