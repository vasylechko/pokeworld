<template>
  <div>
    <div class="pt-10">
      <div class="relative flex min-h-[25rem] justify-between">
        <button
          class="relative z-10 mx-4 block w-24 rounded-xl duration-300 ease-in-out hover:bg-white/20"
          @click="prev()"
        >
          <Icon class="mx-auto" name="arrowBack" />
        </button>

        <transition
          enter-from-class="opacity-0"
          enter-active-class="transition-all duration-300 ease-in	"
          enter-to-class=""
          leave-from-class=""
          leave-active-class="transition-all duration-300 ease-in	"
          leave-to-class="opacity-0"
        >
          <div :key="state" class="absolute inset-0 flex w-full justify-center">
            <SliderItem :item="state" />
          </div>
        </transition>

        <button
          class="relative z-10 mx-4 block w-24 rounded-xl duration-300 ease-in-out hover:bg-white/20"
          @click="next()"
        >
          <Icon class="mx-auto" name="arrowForward" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import { useCycleList } from "@vueuse/core";

import Icon from "../../../components/Icon/index.vue";
import SliderItem from "./SliderItem.vue";

const props = defineProps({
  sliderItems: {
    type: Array,
    default: () => [],
  },
});

const { state, next, prev } = useCycleList([...props.sliderItems]);

onMounted(() => {
  setInterval(() => {
    if (state) {
      next();
    }
  }, 6000);
});
</script>
