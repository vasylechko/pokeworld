<template>
  <div>
    <div class="mb-3 text-3xl font-bold">Найдорожчі речі</div>

    <div class="flex justify-between">
      <PokemonLeaderboardItem
        v-for="(item, index) in items"
        :key="index"
        :pokemon="item"
        :index="index + 1"
      />
    </div>
  </div>
</template>

<script setup>
import PokemonLeaderboardItem from "./PokemonLeaderboardItem.vue";
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped></style>
