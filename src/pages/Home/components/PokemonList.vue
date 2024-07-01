<template>
  <div>
    <div class="mb-4 flex justify-between">
      <div class="text-3xl font-bold">Персонажі</div>

      <slot />
    </div>

    <div class="grid grid-cols-6 gap-4">
      <PokemonCard
        v-for="item in items"
        :key="item?.name"
        :item="item"
        @click="onClickPokemon(item.id)"
      />
    </div>
  </div>
</template>

<script setup>
import PokemonCard from "./PokemonCard.vue";

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["click"]);

function onClickPokemon(id) {
  emit("click", id);
}
</script>

<style scoped></style>
