<template>
  <button class="min-h-10 rounded-2xl px-8 py-2 text-white" :class="selectedClasses">
    <template v-if="loading">
      <Icon name="loading" />
    </template>

    <template v-else>
      {{ label }}
    </template>
  </button>
</template>

<script setup>
import { computed } from "vue";

import Icon from "../Icon/index.vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },

  loading: {
    type: Boolean,
    default: false,
  },

  color: {
    type: String,
    default: "blue",
  },
});

const selectedClasses = computed(() => {
  return {
    "bg-blue-500": props.color === "blue",
    "bg-white/10": props.color === "white",
    "bg-red-500": props.color === "red",
    "bg-dark-900": props.color === "dark",
  };
});
</script>

<style scoped></style>
