<template>
  <div class="flex gap-5">
    <div class="flex h-fit min-w-72 flex-col items-center rounded-2xl bg-darkCharcoal p-4">
      <div class="mb-3 size-48 rounded-full bg-blue-500" />

      <div class="mb-3 text-center text-white">Pavlo Vasylechko</div>

      <div
        class="mb-3 flex w-full justify-around border-y border-solid border-charcoal py-1.5 text-white"
      >
        <div class="text-xs">Коментарі <span class="block text-2xl">0</span></div>

        <div class="text-xs">Вподобано<span class="block text-2xl">0</span></div>

        <div class="text-xs">Реакції<span class="block text-2xl">0</span></div>
      </div>

      <ul class="w-full space-y-3">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="cursor-pointer rounded-2xl p-3 hover:bg-white/10"
          :class="item.isActive ? 'bg-white/10' : ''"
          @click="onClickMenuItem(item, index)"
        >
          <div class="flex items-center text-white">
            <Icon :name="item.icon" size="sm" />

            <div class="ml-2">{{ item.title }}</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="w-full">
      <div class="mb-2.5 text-2xl font-bold text-white">Статистика</div>

      <Statistic v-if="activeMenu === MENU_ITEMS_STATUS.statistic" />

      <Settings v-if="activeMenu === MENU_ITEMS_STATUS.settings" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import profileConfig from "../../../../configs/profile.config.js";

import Icon from "../../../../components/Icon/index.vue";

import Statistic from "../../components/Statistic.vue";
import Settings from "../../components/Settings.vue";

const MENU_ITEMS_STATUS = {
  statistic: "statistic",
  settings: "settings",
  logout: "logout",
};

const store = useStore();
const router = useRouter();

const menuItems = ref(profileConfig.profileMenuItems());

const activeMenu = computed(() => {
  const [active] = menuItems.value.filter((item) => item.isActive);

  return active.name;
});

async function onClickMenuItem(item, itemIndex) {
  menuItems.value.forEach((item, index) => {
    item.isActive = index === itemIndex ? !item.isActive : false;
  });

  if (item.name !== MENU_ITEMS_STATUS.logout) return;

  await store.dispatch("user/logOutUser");
  await router.push({ name: "Home" });
}
</script>

<style scoped></style>
