<template>
  <div class="fixed inset-0 bg-dark-900/20 text-dark-900">
    <div class="flex h-full items-center justify-center">
      <div class="min-w-[40rem] rounded-2xl bg-white p-9">
        <div
          class="mb-4 flex items-center justify-between border-b border-solid border-charcoal/10 py-5"
        >
          <div>#{{ data.id }}</div>

          <Icon name="close" size="sm" class="cursor-pointer" @click="onClickClose" />
        </div>

        <div class="flex">
          <img
            class="mr-6 min-h-80 w-60 flex-none rounded-2xl bg-charcoal/20"
            :src="data.img"
            :alt="data.name"
          />

          <div class="w-full">
            <div class="mb-4 text-2xl capitalize">{{ data.name }}</div>

            <ul class="mb-4">
              <li
                v-for="(value, key, index) in data.stats"
                :key="index"
                class="flex justify-between border-b border-solid border-charcoal/10"
              >
                <div>{{ key }}</div>

                <div>{{ value }}</div>
              </li>
            </ul>

            <div class="mb-3">
              <div class="mb-3 border-b border-solid border-charcoal/10">Тип покемона</div>

              <div class="flex">
                <div
                  v-for="(type, index) in data.types"
                  :key="index"
                  class="rounded-2xl border border-solid border-gray-300 px-3 py-1 text-sm"
                >
                  {{ type }}
                </div>
              </div>
            </div>

            <div>
              <div class="mb-3 border-b border-solid border-charcoal/10">Здібності покемона</div>

              <div class="flex">
                <div
                  v-for="(ability, index) in data.abilities"
                  :key="index"
                  class="rounded-2xl border border-solid border-gray-300 px-3 py-1 text-sm"
                >
                  {{ ability }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from "vue";

import Icon from "../../../../components/Icon/index.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },

  data: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["update:modelValue"]);

const isShownModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

watch(isShownModal, onShownModal, { deep: true, immediate: true });

function onShownModal() {
  document.body.style.overflow = "hidden";
}

function onClickClose() {
  document.body.style.overflow = "auto";

  isShownModal.value = false;
}
</script>

<style scoped></style>
