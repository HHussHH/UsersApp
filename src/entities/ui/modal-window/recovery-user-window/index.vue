<template>
  <div class="recovery-modalWin">
    <div class="recovery-modalWin__header">
      <h2 class="recovery-modalWin__title">Восстановить пользователя</h2>
      <button
        class="recovery-modalWin__closeBtn"
        @click="toggleOpenModalWin"
      ></button>
    </div>
    <p class="recovery-modalWin__description">
      Вы уверены, что хотите восстановить пользователя?
    </p>
    <div class="recovery-modalWin__group">
      <p class="recovery-modalWin__text"></p>
      <CustomButton
        color="primary"
        type="submit"
        :rounded="true"
        @click="handleSubmit"
        label="Восстановить"
      ></CustomButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getDeletedUsersStore } from "@/entities/model";
import { User } from "@/shared/api";
import { CustomButton } from "@/shared/ui";

const { user, toggleOpenModalWin } = defineProps<{
  user: User | null;
  toggleOpenModalWin: () => void;
}>();

const deletedStore = getDeletedUsersStore();
const handleSubmit = () => {
  if (user !== null) {
    deletedStore.recoveryUsersHandler(user);
    toggleOpenModalWin();
  }
};
</script>

<style lang="less" scoped>
@import "@/app/styles/vars.less";
.recovery-modalWin {
  display: flex;
  flex-direction: column;

  gap: 20px;
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
  &__closeBtn {
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
  &__description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000;

    @media (min-width: @TV) {
      font-size: 22px;
      line-height: 35px;
      margin-top: 50px;
    }
    @media (max-width: @tablet) {
      font-size: 14px;
      line-height: 18px;
    }
  }
  &__group {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__text {
    font-weight: 600;
    color: red;
  }
}
</style>
