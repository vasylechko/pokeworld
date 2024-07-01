<template>
  <div class="w-full rounded-2xl bg-darkCharcoal p-5">
    <div class="flex items-center justify-between">
      <div class="flex items-center text-start">
        <Icon name="filter" size="sm" />

        <div class="ml-1">Фільтри</div>
      </div>

      <Input v-model="requestedPokemon" class="w-96" @keydown.enter="onCLickSendRequest">
        <template #before>
          <Icon name="search" size="sm" />
        </template>

        <template #after>
          <Icon name="send" size="sm" class="cursor-pointer" @click="onCLickSendRequest" />
        </template>
      </Input>

      <Button label="Скинути" color="white" @click="onClickClear" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import Icon from "../../../../components/Icon/index.vue";
import Input from "../../../../components/Input/index.vue";
import Button from "../../../../components/Button/index.vue";

const props = defineProps({
  searchText: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["searchPokemon", "clear"]);

const requestedPokemon = ref("");

const selectedText = computed({
  get: () => props.searchText,
});

watch(selectedText, onChangeSearchText, { deep: true, immediate: true });

function onChangeSearchText(newText) {
  requestedPokemon.value = newText;
}

function onCLickSendRequest() {
  if (requestedPokemon.value) {
    emit("searchPokemon", requestedPokemon.value);
  }
}

function onClickClear() {
  requestedPokemon.value = "";
  emit("clear");
}
</script>

<style scoped></style>
