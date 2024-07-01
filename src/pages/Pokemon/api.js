import axios from "axios";

const POKEMON_API = "https://pokeapi.co/api/v2";

export const DEFAULT_LIMIT = 24;

export const DEFAULT_OFFEST = 0;

export const ALL_POKEMONS_NUMBER = 1302;

export const RANDOM_OF_POKEMON_NUMBER = 6;

export async function getPokemons(
  limit = DEFAULT_LIMIT,
  offset = DEFAULT_OFFEST,
  randomPokemonNumber = null,
) {
  try {
    const response = await axios.get(`${POKEMON_API}/pokemon/?limit=${limit}&offset=${offset}`);

    let pokemonsUrl = response.data.results.map((item) => item.url);

    if (randomPokemonNumber) {
      pokemonsUrl = pokemonsUrl.sort(() => 0.5 - Math.random()).slice(0, randomPokemonNumber);
    }

    const pokemonsPromises = pokemonsUrl.map((url) => axios.get(url).then((res) => res.data));
    const allPokemons = await Promise.all(pokemonsPromises);

    return allPokemons;
  } catch (error) {
    throw error(error);
  }
}

export async function getPokemon(name) {
  try {
    const response = await axios.get(`${POKEMON_API}/pokemon/${name}`);

    return response.data;
  } catch (error) {
    throw error(error);
  }
}

export async function getItems() {
  try {
    const response = await axios.get(`${POKEMON_API}/item?offset=200&limit=10`);

    const itemsUrl = response.data.results.map((item) => item.url);

    const itemsPromises = itemsUrl.map((url) => axios.get(url).then((res) => res.data));
    const allItems = await Promise.all(itemsPromises);

    return allItems;
  } catch (error) {
    throw error(error);
  }
}
