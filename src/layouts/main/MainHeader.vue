<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <a href="/" class="mr-6">
        <img
          class="h-14 w-36 rounded-lg object-fill"
          src="../../assets/images/logo.png"
          alt="logo"
        />
      </a>

      <Button label="Ми в Telegram" />
    </div>

    <nav>
      <ul class="flex text-xl text-white">
        <li class="mr-9">
          <router-link :to="{ name: 'Home' }"> Home </router-link>
        </li>

        <li class="mr-9">
          <router-link :to="{ name: 'Pokemons' }"> Pokemons </router-link>
        </li>
      </ul>
    </nav>

    <div>
      <div
        v-if="userId"
        class="flex cursor-pointer items-center rounded-2xl px-5 py-3 hover:bg-white/10"
        @click="onClickProfile"
      >
        <div class="flex size-10 items-center justify-center rounded-full bg-blue-500 text-white">
          T
        </div>

        <div class="ml-2 text-white">test</div>
      </div>

      <Button v-else label="Вхід" color="red" @click="onClickLogIn" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

import Button from "../../components/Button/index.vue";

const router = useRouter();
const store = useStore();

const userId = computed(() => store.state.user.userId);

async function onClickLogIn() {
  await router.push({ name: "Login" });
}

async function onClickProfile() {
  await router.push({ name: "Profile" });
}
</script>
