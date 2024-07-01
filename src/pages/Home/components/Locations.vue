<template>
  <div>
    <div class="mb-4">
      <div class="text-3xl font-bold">Локації</div>
    </div>

    <div class="grid grid-cols-4 gap-6">
      <div
        v-for="(location, index) in list"
        :key="index"
        class="w-full rounded-xl bg-darkCharcoal p-4"
      >
        <div class="mb-3 text-2xl capitalize">{{ location.name }}</div>

        <div>
          <div class="mb-3 text-lg font-bold">Групи</div>

          <div
            v-for="(group, index) in location.groups"
            :key="index"
            class="mb-2 flex justify-between border-b border-solid border-white/10"
          >
            <div>Група</div>

            <div>{{ group }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>
