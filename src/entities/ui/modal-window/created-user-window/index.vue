<template>
  <form class="creating-form" @submit.prevent="handleSubmit">
    <div class="creating-form__header" @click.stop>
      <h2 class="creating-form__title">Создание нового пользователя</h2>
      <button
        type="button"
        class="creating-form__closeButton"
        @click="toggleOpenModalWin"
      ></button>
    </div>
    <div class="creating-form__fields">
      <FileInput
        :fileImage="fileImage"
        @handleFileInput="fileInputChange"
        type="image"
        title="Загрузить картинку:"
      />
      <CustomInput
        v-for="input in newUserStore.inputData"
        :formatPhoneNumber="formatPhoneNumber"
        :key="input.name"
        :name="input.name"
        :type="input.type"
        :placeholder="input.placeholder"
        v-model:value.trim="validate[input.name].$model"
        :error="validate[input.name].$errors"
      />
    </div>
    <div class="creating-form__group">
      <p class="creating-form__errorText">
        <span v-if="newUserStore.isError">Почта уже используется!</span>
      </p>

      <CustomButton
        type="submit"
        color="primary"
        :rounded="true"
        @click="handleSubmit"
        label="Создать"
      ></CustomButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, toRef, watchEffect } from "vue";
import { getCreatedUserStore } from "@/entities/model";
import { fileInputChange } from "@/features";
import { CustomInput, CustomButton, FileInput } from "@/shared/ui";
import { validate, formatPhoneNumber } from "@/features";

const { toggleOpenModalWin } = defineProps<{
  toggleOpenModalWin: () => void;
}>();
const newUserStore = getCreatedUserStore();

const fileImage = reactive({
  src: toRef(newUserStore, "image"),
});
const handleSubmit = () => {
  validate.value.$touch();
  if (!validate.value.$error) {
    if (newUserStore.checkUniqueUserEmail === true) {
      newUserStore.createdUser();
      toggleOpenModalWin();
    }
  }
};

watchEffect(() => {
  newUserStore.firstName = validate.value.firstName.$model;
  newUserStore.email = validate.value.email.$model;
  newUserStore.phone = validate.value.phone.$model;
});
</script>

<style lang="less" scoped>
@import "@/app/styles/vars.less";
.creating-form {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-size: 14px;
    font-weight: 600;
    color: #000;
    height: max-content;
    line-height: 17px;

    @media (min-width: @TV) {
      line-height: 30px;
      font-size: 26px;
    }
    @media (max-width: @tablet) {
      text-align: center;
    }
  }
  &__closeButton {
    min-width: 14px;
    min-height: 14px;
    margin-left: 10px;
    border: none;
    cursor: pointer;
    background-color: inherit;
    background-image: url("@/shared/assets/closeIcon.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-width: @TV) {
      width: 18px;
      height: 18px;
    }
  }
  &__fields {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 20px;

    @media (min-width: @TV) {
      gap: 30px;
    }
  }
  &__group {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__errorText {
    font-weight: 600;
    color: red;
  }
}
</style>
