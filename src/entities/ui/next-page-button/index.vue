<template>
  <div class="nextPage">
    <p class="nextPage__counter">{{ perPage }} из {{ total }}</p>
  </div>
  <div class="nextPage__buttons">
    <CustomButton
      type="button"
      @click="$emit('loadMorePages')"
      label="Загрузить еще"
      :rounded="false"
      color="gray"
      v-show="showMoreBtn"
    ></CustomButton>

    <CustomButton
      type="button"
      label="Вернуть назад"
      :rounded="false"
      color="gray"
      @click="$emit('loadLessPages')"
      v-show="showLessBtn"
    ></CustomButton>
  </div>
</template>

<script setup lang="ts">
import { CustomButton } from "@/shared/ui";
defineEmits<{
  loadMorePages: [];
  loadLessPages: [];
}>();
defineProps<{
  showLessBtn: boolean;
  perPage: number;
  showMoreBtn: boolean;
  total: number;
}>();
</script>

<style lang="less" scoped>
@import "@/app/styles/vars.less";
.nextPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  @media (min-width: @TV) {
    gap: 15px;
  }
  &__counter {
    text-align: center;
    color: @gray-dark;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    @media (min-width: @TV) {
      font-size: 18px;
    }
  }
  &__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    gap: 10px;
  }
}
</style>
