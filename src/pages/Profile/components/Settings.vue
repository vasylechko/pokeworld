<template>
  <div class="mb-3 rounded-2xl bg-darkCharcoal p-10">
    <div class="mb-3 flex justify-between border-b border-solid border-charcoal pb-2">
      <div class="flex items-center">
        <Icon name="person" size="sm" />

        <div class="ml-2">Особисті данні</div>
      </div>

      <Button color="white" label="Редагувати" @click="onClickEditPersonal" />
    </div>

    <div class="grid grid-cols-3 gap-4">
      <Input type="text" placeholder="Імя" :disabled="isDisabledPersonalDataForm" />

      <Input type="text" placeholder="Прізвище" :disabled="isDisabledPersonalDataForm" />

      <Input type="text" placeholder="Нікнейм" :disabled="isDisabledPersonalDataForm" />

      <Input type="text" placeholder="Стать" :disabled="isDisabledPersonalDataForm" />

      <Input type="text" placeholder="Країна" :disabled="isDisabledPersonalDataForm" />
    </div>
  </div>

  <div class="rounded-2xl bg-darkCharcoal p-10">
    <div class="mb-3 flex justify-between border-b border-solid border-charcoal pb-2">
      <div class="flex items-center">
        <Icon name="settings" size="sm" />

        <div class="ml-2">Безпека</div>
      </div>

      <Button color="white" label="Редагувати" @click="onClickEditSecurity" />
    </div>

    <div class="grid grid-cols-3 gap-4">
      <Input type="text" placeholder="Пошта" :disabled="isDisabledSecurityForm" />

      <Input type="text" placeholder="Пароль" :disabled="isDisabledSecurityForm" />

      <Input type="text" placeholder="Новий пароль" :disabled="isDisabledSecurityForm" />

      <Input type="text" placeholder="Повторіть новий пароль" :disabled="isDisabledSecurityForm" />
    </div>
  </div>
</template>

<script setup>
import Icon from "../../../components/Icon/index.vue";
import Button from "../../../components/Button/index.vue";
import Input from "../../../components/Input/index.vue";
import { ref } from "vue";

const isDisabledPersonalDataForm = ref(true);
const isDisabledSecurityForm = ref(true);

function onClickEditPersonal() {
  isDisabledPersonalDataForm.value = !isDisabledPersonalDataForm.value;
}

function onClickEditSecurity() {
  isDisabledSecurityForm.value = !isDisabledSecurityForm.value;
}
</script>

<style scoped></style>
