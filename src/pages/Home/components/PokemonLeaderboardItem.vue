<template>
  <div class="relative pt-5 text-center">
    <img
      class="relative z-10 mb-1 size-12 rounded-full bg-blue-500"
      :src="pokemon.img"
      :alt="pokemon.name"
    />

    <div
      class="absolute -left-3 top-1.5 z-0 flex size-8 items-center justify-center rounded-full text-white/80"
      :class="selectedClasses"
    >
      {{ index }}
    </div>

    <div class="mb-1 text-sm font-bold">{{ pokemon.name }}</div>
    <div class="text-xs text-white/30">{{ pokemon.cost }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  pokemon: {
    type: Object,
    default: () => ({}),
  },

  index: {
    type: Number,
    default: null,
  },
});

const selectedClasses = computed(() => {
  return {
    "bg-amber-500": props.index === 1,
    "bg-gray-500": props.index === 2,
    "bg-yellow-700": props.index === 3,
    "bg-darkCharcoal": props.index !== 1 && props.index !== 2 && props.index !== 3,
  };
});
</script>
