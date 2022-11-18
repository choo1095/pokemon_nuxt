import axios from '/axios.config.js';
import { POKEMON_PER_PAGE } from '@/constants/';

const getAllPokemon = async (offset) => {
    let pokemonList = axios.get('pokemon', {
        params: {
          limit: POKEMON_PER_PAGE,
          offset: offset,
        }
    })
    return (await pokemonList).data;
};

const getPokemonDetails = async (id) => {
    let pokemonDetails = axios.get(`pokemon/${id}`);
    return (await pokemonDetails).data;
}

export { getAllPokemon, getPokemonDetails };
