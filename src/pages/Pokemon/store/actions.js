import { getItems, getPokemon, getPokemons } from "../api.js";

export default {
  async getPokemons(context, params) {
    const response = await getPokemons(params?.limit, params?.offset, params?.randomPokemonNumber);

    if (params?.randomPokemonNumber) {
      context.commit("SET_RANDOM_POKEMONS", response);
    } else if (params?.addNewPokemons) {
      context.commit("UPDATE_POKEMONS", response);
    } else {
      context.commit("SET_POKEMONS", response);
    }
  },

  async getPokemon(context, name) {
    const response = await getPokemon(name);

    context.commit("SET_POKEMONS", [response]);
  },

  async getItems(context) {
    const response = await getItems();

    context.commit("SET_ITEMS", response);
  },
};
