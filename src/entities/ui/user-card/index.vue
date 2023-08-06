<template>
  <div class="userCard">
    <div class="userCard__info">
      <img class="userCard__icon" :src="image" />
      <span class="userCard__content">
        <h5 class="userCard__name">
          {{ firstName }}
        </h5>
        <div class="userCard__group">
          <p class="userCard__email">{{ email }}</p>
          <span class="userCard__br">/</span>
          <p class="userCard__phone">{{ phone }}</p>
        </div>
      </span>
    </div>
    <a class="userCard__button">
      <ModalWindowBody>
        <template #btn="{ toggleOpenModalWin }">
          <img
            @click="toggleOpenModalWin"
            src="@/shared/assets/TrashBacket.svg"
            alt="TrashBacket"
          />
        </template>

        <template #windowContent="{ toggleOpenModalWin }">
          <DeletedUserWindow
            @toggleOpenModalWin="toggleOpenModalWin"
            :user="{
              image,
              firstName,
              email,
              phone,
              id,
            }"
          ></DeletedUserWindow>
        </template>
      </ModalWindowBody>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ModalWindowBody } from "@/shared/ui";
import { DeletedUserWindow } from "../modal-window";
import { User } from "@/shared/api";
defineProps<User>();
</script>

<style lang="less" scoped>
@import "@/app/styles/vars.less";

.userCard {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  &__info {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__icon {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    border: 1px solid @gray;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media (min-width: @TV) {
      width: 90px;
      height: 90px;
    }
    @media (max-width: @tablet) {
      width: 60px;
      height: 60px;
    }
    @media (max-width: @mobile) {
      width: 50px;
      height: 50px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 6px;
    @media (min-width: @TV) {
      gap: 20px;
    }
  }
  &__group {
    display: flex;
    color: @gray-dark;
    gap: 5px;
    @media (max-width: @tablet) {
      display: block;
    }
  }
  &__br {
    @media (max-width: @tablet) {
      display: none;
    }
  }
  &__name {
    color: #000;
    font-weight: 600;
    font-size: 16px;
    line-height: 19.5px;
    @media (min-width: @TV) {
      font-size: 22px;
    }
  }
  &__email,
  &__phone {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    @media (min-width: @TV) {
      font-size: 18px;
    }
    @media (max-width: @tablet) {
      font-size: 12px;
    }
  }
  &__button {
    cursor: pointer;
    @media (min-width: @TV) {
      img {
        width: 28px;
        height: 28px;
      }
    }
  }
}
</style>
