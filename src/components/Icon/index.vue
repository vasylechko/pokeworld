<template>
  <component :is="iconComponent" :class="selectedClasses" />
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },

  size: {
    type: String,
    default: "md",
  },
});

const iconComponent = defineAsyncComponent(
  () => import(`../../assets/icons/${props.name}.svg?component`),
);

const selectedClasses = computed(() => {
  return {
    "size-6	": props.size === "sm",
    "size-10": props.size === "md",
    "size-14": props.size === "lg",
  };
});
</script>

<style scoped></style>
