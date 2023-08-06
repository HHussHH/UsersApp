<template>
  <div class="error">
    <p class="error__text">
      {{ usersStore.errorHadler }}
    </p>
    <img class="error__img" :src="basePathToDefaultErrorGif" />
    <CustomButton label="Перезагрузить" @click="rebootWindow"></CustomButton>
  </div>
</template>
<script setup lang="ts">
import { getUsersInfoStore } from "@/entities/model";
import { CustomButton } from "@/shared/ui";
import { rebootWindow } from "@/features";
const basePathToDefaultErrorGif = `${import.meta.env.BASE_URL}img/errorGif.gif`;
const usersStore = getUsersInfoStore();
</script>

<style lang="less">
@import "@/app/styles/vars.less";

.error {
  margin-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  &__img {
    width: 250px;
    height: 350px;
    @media (min-width: @TV) {
      width: 350px;
      height: 400px;
    }
    @media (max-width: @tablet) {
      width: 150px;
      height: 250px;
    }
  }
  &__text {
    font-weight: 600;
    color: red;
    font-size: 16px;

    @media (min-width: @TV) {
      font-size: 26px;
    }
  }
}
</style>
