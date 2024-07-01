export default {
  pokemonsList(state) {
    const pokemons = state.pokemons;

    return pokemons.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites?.front_default,
        types: pokemon?.types?.map((types) => types.type.name),
        abilities: pokemon.abilities.map((item) => item.ability.name),
        stats: Object.assign(
          {},
          ...pokemon.stats.map((item) => ({
            [item.stat.name]: item["base_stat"],
          })),
        ),
      };
    });
  },

  itemsForCards(state) {
    const items = state.items;

    return items
      .map((item) => {
        return {
          name: item.name,
          img: item.sprites.default,
          cost: item.cost,
        };
      })
      .sort((a, b) => b.cost - a.cost);
  },

  randomPokemons(state) {
    const randomPokemons = state.randomPokemons;

    return randomPokemons.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.front_default,
        types: pokemon.types.map((types) => types.type.name),
        abilities: pokemon.abilities.map((item) => item.ability.name).join(", "),
        stats: Object.assign(
          {},
          ...pokemon.stats.map((item) => ({
            [item.stat.name]: item["base_stat"],
          })),
        ),
      };
    });
  },
};
