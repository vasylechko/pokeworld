<template>
  <div class="min-h-screen w-full bg-charcoal">
    <div class="mx-auto flex min-h-screen w-[90rem] flex-col">
      <header>
        <MainHeader class="pt-14" />
      </header>

      <main class="flex-auto py-16">
        <slot />
      </main>

      <MainFooter />
    </div>
  </div>
</template>

<script setup>
import MainHeader from "./MainHeader.vue";
import MainFooter from "../components/MainFooter.vue";

defineOptions({ name: "MainLayouts" });
</script>

<style scoped></style>
