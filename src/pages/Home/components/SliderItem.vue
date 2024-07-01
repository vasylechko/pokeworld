<template>
  <div class="flex w-fit min-w-[64rem] rounded-2xl p-7 hover:bg-white/10">
    <img
      class="mr-8 h-80 w-60 flex-none rounded-2xl bg-white/10"
      :src="item.img"
      :alt="item.name"
    />

    <div class="flex grow flex-col justify-center">
      <div class="mb-8 text-5xl capitalize">{{ item.name }}</div>

      <div class="mb-3">Здібності: {{ item.abilities }}</div>

      <div class="mb-2.5 flex items-center space-x-4">
        <div class="">Тип:</div>

        <div
          v-for="(type, index) in item.types"
          :key="index"
          class="rounded-2xl border border-solid border-gray-300 px-3 py-1 text-sm"
        >
          {{ type }}
        </div>
      </div>

      <div class="mb-4 text-white/60">
        <div v-for="(value, key, index) in item.stats" :key="index">{{ key }}: {{ value }}</div>
      </div>
    </div>

    <div class="flex h-fit space-x-3">
      <Buttom label="Дізнатися більше" @click="onClickLearnMore" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

import Buttom from "../../../components/Button/index.vue";

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});

const router = useRouter();

async function onClickLearnMore() {
  await router.push({ name: "Pokemon", params: { id: props.item.id } });
}
</script>

<style scoped></style>
