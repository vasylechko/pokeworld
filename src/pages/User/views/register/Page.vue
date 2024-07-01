<template>
  <div>
    <div class="rounded-2xl border border-solid border-charcoal px-9 py-4 text-dark-900">
      <div class="mb-7">
        <div class="mb-3 text-2xl font-light">Welcome!!</div>

        <div class="mb-1 text-3xl font-medium">Sign up to</div>

        <div>PokeWorld</div>
      </div>

      <div class="w-96">
        <div class="relative mb-6 flex flex-col">
          <label class="mb-3 font-medium" for="">Email</label>

          <input
            v-model="validate.emailField.$model"
            class="solid rounded-2xl border border-charcoal px-7 py-5 outline-none"
            type="email"
            placeholder="Enter your email"
          />

          <div
            v-for="error in validate.emailField.$errors"
            :key="error.$uid"
            class="absolute -bottom-5 left-0 pl-2 text-sm text-red-500"
          >
            {{ error.$message }}
          </div>
        </div>

        <div class="relative mb-6 flex flex-col">
          <label class="mb-3 font-medium" for="">User name</label>

          <input
            v-model="validate.usernameField.$model"
            class="solid rounded-2xl border border-charcoal px-7 py-5 outline-none"
            type="text"
            placeholder="Enter your user name"
          />

          <div
            v-for="error in validate.usernameField.$errors"
            :key="error.$uid"
            class="absolute -bottom-5 left-0 pl-2 text-sm text-red-500"
          >
            {{ error.$message }}
          </div>
        </div>

        <div class="relative mb-6 flex flex-col">
          <label class="mb-3 font-medium" for="">Password</label>

          <input
            v-model="validate.passwordField.$model"
            class="solid rounded-2xl border border-charcoal px-7 py-5 outline-none"
            type="password"
            placeholder="Enter your Password"
          />

          <div
            v-for="error in validate.passwordField.$errors"
            :key="error.$uid"
            class="absolute -bottom-5 left-0 pl-2 text-sm text-red-500"
          >
            {{ error.$message }}
          </div>
        </div>
      </div>

      <Button label="Зареєструватися" color="dark" class="mb-5 w-full" @click="singUp" />

      <div class="text-center">
        Already have an Account ?
        <router-link class="font-bold" :to="{ name: 'Login' }">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import useVuelidate from "@vuelidate/core";
import { minLength, email, required } from "@vuelidate/validators";

import Button from "../../../../components/Button/index.vue";

const store = useStore();
const router = useRouter();

const emailField = ref("");
const usernameField = ref("");
const passwordField = ref("");

const rules = computed(() => ({
  passwordField: {
    minLength: minLength(6),
  },
  emailField: {
    email: email,
    required: required,
  },
  usernameField: {
    required: required,
  },
}));

const validate = useVuelidate(rules, { passwordField, emailField, usernameField });

async function singUp() {
  validate.value.$touch();

  if (validate.value.$error) return;

  const params = {
    email: emailField.value,
    username: usernameField.value,
    password: passwordField.value,
  };

  await store.dispatch("user/registerUser", params);
  await router.push({ name: "Profile" });
}
</script>

<style scoped></style>
