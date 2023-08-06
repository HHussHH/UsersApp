<template>
  <div class="deleted-modalWin">
    <div class="deleted-modalWin__header">
      <h2 class="deleted-modalWin__title">Удаление пользователя</h2>
      <button
        class="deleted-modalWin__closeButton"
        @click="$emit('toggleOpenModalWindow')"
      ></button>
    </div>
    <p class="deleted-modalWin__description">
      Вы уверены, что хотите удалить пользователя?
    </p>
    <div class="deleted-modalWin__group">
      <p class="deleted-modalWin__errorText"></p>

      <CustomButton
        @click="handleSubmit"
        type="submit"
        color="primary"
        :rounded="true"
        label="Подтвердить"
      ></CustomButton>
    </div>
  </div>
</template>

<script setup lang="ts" scoped>
import { getDeletedUsersStore } from "@/entities/model";
import { User } from "@/shared/api";
import { CustomButton } from "@/shared/ui";

const emits = defineEmits<{
  toggleOpenModalWin: [];
}>();
const props = defineProps<{
  user: User;
}>();

const deletedStore = getDeletedUsersStore();
const handleSubmit = () => {
  if (props.user) {
    deletedStore.deletedUsersHandler(props.user);
    emits("toggleOpenModalWin");
  }
};
</script>

<style lang="less">
@import "@/app/styles/vars.less";
.deleted-modalWin {
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
  &__errorText {
    font-weight: 600;
    color: red;
  }
}
</style>
