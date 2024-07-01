export default {
  SET_POKEMONS(state, pokemons) {
    state.pokemons = pokemons;
  },

  UPDATE_POKEMONS(state, pokemons) {
    state.pokemons.push(...pokemons);
  },

  SET_ITEMS(state, items) {
    state.items = items;
  },

  SET_RANDOM_POKEMONS(state, randomPokemons) {
    state.randomPokemons = randomPokemons;
  },
};
