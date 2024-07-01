<template>
  <div class="flex h-12 max-w-5xl items-center rounded-2xl px-4" :class="activeClass">
    <slot name="before" />

    <input
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      class="size-full px-2 text-white outline-none"
      :class="activeClass"
      :disabled="disabled"
    />

    <slot name="after" />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },

  type: {
    type: String,
    default: "text",
  },

  placeholder: {
    type: String,
    default: "",
  },

  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const activeClass = computed(() => {
  return {
    "bg-charcoal": !props.disabled,
    "bg-darkCharcoal": props.disabled,
  };
});
</script>

<style scoped></style>
