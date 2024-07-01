<template>
  <div>
    <Slider v-if="pokemonsForSlider.length" class="mb-10" :slider-items="pokemonsForSlider" />

    <PokemonList class="mb-10" :items="pokemonsList" @click="onClickCard">
      <Button label="Більше" color="white" @click="onClickMore" />
    </PokemonList>

    <Locations class="mb-10" :list="locationsList" />

    <PokemonLeaderboard :items="itemsForCards" />
  </div>

  <PokemonDetailsModal v-if="isShownModal" v-model="isShownModal" :data="selectedPokemon" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import { ALL_POKEMONS_NUMBER, RANDOM_OF_POKEMON_NUMBER } from "../../../Pokemon/api.js";

import Button from "../../../../components/Button/index.vue";

import Slider from "../../components/Slider.vue";
import PokemonLeaderboard from "../../components/PokemonLeaderboard.vue";
import Locations from "../../components/Locations.vue";
import PokemonList from "../../components/PokemonList.vue";
import PokemonDetailsModal from "../../../Pokemon/views/details/Modal.vue";

const store = useStore();
const router = useRouter();

const isShownModal = ref(false);
const selectedPokemon = ref(null);

const pokemonsList = computed(() => store.getters["pokemon/pokemonsList"]);
const itemsForCards = computed(() => store.getters["pokemon/itemsForCards"]);
const pokemonsForSlider = computed(() => store.getters["pokemon/randomPokemons"]);
const locationsList = computed(() => store.getters["home/locationsList"]);

onMounted(async () => {
  await Promise.all([
    store.dispatch("pokemon/getPokemons", {
      limit: ALL_POKEMONS_NUMBER,
      randomPokemonNumber: RANDOM_OF_POKEMON_NUMBER,
    }),
    store.dispatch("pokemon/getPokemons"),
    store.dispatch("home/getRegions"),
    store.dispatch("pokemon/getItems"),
  ]);
});

async function onClickMore() {
  await router.push({ name: "Pokemons" });
}

function onClickCard(id) {
  isShownModal.value = true;

  const [pokemon] = pokemonsList.value.filter((pokemon) => pokemon.id === id);

  selectedPokemon.value = pokemon;
}
</script>

<style scoped></style>
