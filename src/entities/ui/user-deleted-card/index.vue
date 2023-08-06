<template>
  <div class="delCard">
    <img class="delCard__img" :src="image" alt="robot" />
    <div class="delCard__content">
      <span class="delCard__name">{{ firstName }}</span>
      <span class="delCard__id">Id:{{ userId }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  firstName: string;
  email: string;
  phone: string;
  userId: number;
}>();
</script>

<style lang="less" scoped>
@import "@/app/styles/vars.less";
.delCard {
  width: 110px;
  height: 110px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  border: 1px solid @gray;
  border-radius: 10px;

  @media (max-width: @tablet) {
    width: 80px;
    height: 80px;
  }

  &:hover {
    background-color: @gray;
  }

  cursor: pointer;

  &__img {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    @media (max-width: @tablet) {
      width: 40px;
      height: 40px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__name {
    font-weight: 500;
    @media (max-width: @tablet) {
      font-size: 14px;
    }
  }
  &__id {
    font-size: 14px;
    font-weight: 400;
    @media (max-width: @tablet) {
      font-size: 12px;
    }
  }
}
</style>
