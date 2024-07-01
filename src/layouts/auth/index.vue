<template>
  <div class="min-h-screen w-full">
    <div class="mx-auto flex min-h-screen w-[90rem] flex-col">
      <div class="flex items-center justify-between pt-14">
        <a href="/" class="mr-6">
          <img
            class="h-14 w-36 rounded-lg object-fill"
            src="../../assets/images/logo.png"
            alt="logo"
          />
        </a>

        <Button label="Ми в Telegram" />
      </div>

      <main class="flex flex-auto items-center justify-around py-16">
        <slot />

        <img class="h-[39rem]" src="../../assets/images/auth-layouts-bg.png" alt="" />
      </main>

      <MainFooter theme="white" />
    </div>
  </div>
</template>

<script setup>
import MainFooter from "../components/MainFooter.vue";
import Button from "../../components/Button/index.vue";
import { onMounted } from "vue";
import { ALL_POKEMONS_NUMBER, RANDOM_OF_POKEMON_NUMBER } from "../../pages/Pokemon/api.js";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("pokemon/getPokemons", {
    limit: ALL_POKEMONS_NUMBER,
    randomPokemonNumber: RANDOM_OF_POKEMON_NUMBER,
  });
});
</script>
