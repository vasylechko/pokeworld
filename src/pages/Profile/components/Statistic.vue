<template>
  <div class="mb-3 rounded-2xl bg-darkCharcoal p-10">
    <div class="mb-3">Загальна інформація</div>

    <div class="mb-3 flex w-full justify-between py-1.5">
      <div class="text-xs">Рейтинг <span class="block text-2xl">0</span></div>

      <div class="text-xs">
        Був на сайті <span class="block text-2xl">{{ getTimeAgo(data.lastLoginAt) }}</span>
      </div>

      <div class="text-xs">
        Зареєстровано <span class="block text-2xl">{{ getTimeAgo(data.createdAt) }}</span>
      </div>

      <div class="text-xs">Переглянуто контенту <span class="block text-2xl">0</span></div>
    </div>
  </div>

  <div class="mb-3 rounded-2xl bg-darkCharcoal p-10">
    <div class="mb-3">Улюблені покемони</div>

    <div class="flex flex-col items-center">
      <div class="mb-3">Немає даних що до улюблених покемонів</div>

      <div>
        <Icon name="breakingNews" size="lg" class="size-90" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "../../../components/Icon/index.vue";
import DateService from "../../../services/date.service.js";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const data = computed(() => store.state.user.data);

function getTimeAgo(date) {
  return DateService.getTimeAgo(date);
}
</script>

<style scoped></style>
