<template>
  <div
    class="cursor-pointer hover:rounded-b-2xl hover:bg-white/10 hover:shadow-md hover:shadow-white/20"
  >
    <img class="min-h-80 w-full bg-white/10" :src="item.img" :alt="item?.name" />

    <div class="rounded-b-2xl bg-darkCharcoal px-4 py-2 text-center">
      <div class="mb-3 text-sm font-bold">{{ item?.name }}</div>

      <div class="flex justify-center space-x-2">
        <div
          v-for="(type, index) in item.types"
          :key="index"
          class="rounded-2xl border border-solid border-blue-500 bg-blue-300 px-2 py-0.5 text-sm text-blue-800"
        >
          {{ type }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});
</script>
