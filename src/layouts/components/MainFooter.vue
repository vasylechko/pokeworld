<template>
  <footer class="pb-3" :class="activeClasses">
    <div class="mb-5 flex justify-between border-y border-solid border-gray-800 py-5">
      <div class="grid gap-y-2">
        <a href="/" class="block">
          <img
            class="h-14 w-36 rounded-lg object-fill"
            src="../../assets/images/logo.png"
            alt="logo"
          />
        </a>

        <div class="my-2 flex flex-col space-y-2">
          <Button label="Ми в Telegram" />

          <Button label="Ми в Tiktok" color="red" />
        </div>

        <div class="block text-yellow-500">Вимкни рекламу за репост</div>
      </div>

      <div class="flex space-x-10">
        <div>
          <div class="mb-3 text-xl">Покемони</div>

          <ul class="grid grid-cols-3 gap-6">
            <li
              v-for="(pokemon, index) in randomPokemons"
              :key="index"
              class="py-1.5 text-sm capitalize opacity-70"
            >
              <router-link :to="{ name: 'Pokemons', query: { name: pokemon.name } }">
                {{ pokemon.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex justify-between text-sm">
      <div>Наші контакти <a href="" class="text-blue-500">pavlo.vasilechko@gmail.com</a></div>

      <a href="#" class="underline">Правовласникам</a>

      <a href="#" class="underline">Політика конфіденційності</a>

      <div>2024 All right reserved</div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import Button from "../../components/Button/index.vue";

const props = defineProps({
  theme: {
    type: String,
    default: "dark",
  },
});

const activeClasses = computed(() => {
  return {
    "text-white": props.theme === "dark",
    "text-dark-900": props.theme === "white",
  };
});

const store = useStore();

const randomPokemons = computed(() => store.getters["pokemon/randomPokemons"]);
</script>
