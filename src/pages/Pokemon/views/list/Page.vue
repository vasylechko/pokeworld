<template>
  <PokemonFilter
    v-model:search-text="searchPokemon"
    class="mb-5"
    @searchPokemon="onSearchPokemon"
    @clear="onClickClearSearch"
  />

  <PokemonList :items="pokemonsList" @click="onClick" />

  <div class="mt-6 text-center">
    <Button v-if="isAllPokemonsLoaded" label="Більше" :loading="isLoading" @click="onClickMore" />
  </div>

  <PokemonDetailsModal v-if="isShownModal" v-model="isShownModal" :data="selectedPokemon" />
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

import { DEFAULT_LIMIT, ALL_POKEMONS_NUMBER } from "../../api.js";

import Button from "../../../../components/Button/index.vue";
import PokemonFilter from "../../components/PokemonFilter/index.vue";
import PokemonList from "../../../Home/components/PokemonList.vue";
import PokemonDetailsModal from "../details/Modal.vue";

const store = useStore();
const route = useRoute();

const currentOffset = ref(0);
const isLoading = ref(false);
const searchPokemon = ref("");
const isShownModal = ref(false);
const selectedPokemon = ref(null);

const pokemonsList = computed(() => store.getters["pokemon/pokemonsList"]);

const isAllPokemonsLoaded = computed(
  () => pokemonsList.value.length !== ALL_POKEMONS_NUMBER && !searchPokemon.value,
);

watch(pokemonsList, () => (isLoading.value = false), { deep: true });

onMounted(async () => {
  if (route.query.name) {
    searchPokemon.value = route.query.name;

    await getPokemon(searchPokemon.value);
  } else {
    await getPokemons();
  }
});

async function getPokemons(params) {
  await store.dispatch("pokemon/getPokemons", params);
}

async function getPokemon(text) {
  await store.dispatch("pokemon/getPokemon", text);
}

async function onClickMore() {
  currentOffset.value += DEFAULT_LIMIT;
  isLoading.value = true;

  await getPokemons({
    offset: currentOffset.value,
    addNewPokemons: true,
  });
}

async function onSearchPokemon(searchText) {
  if (searchPokemon.value === searchText) return;

  searchPokemon.value = searchText;

  await getPokemon(searchText);
}

async function onClickClearSearch() {
  if (searchPokemon.value === "") return;

  await getPokemons();
}

function onClick(id) {
  isShownModal.value = true;

  const [pokemon] = pokemonsList.value.filter((pokemon) => pokemon.id === id);

  selectedPokemon.value = pokemon;
}
</script>

<style scoped></style>
