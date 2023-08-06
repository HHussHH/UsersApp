<template>
  <slot name="btn" :toggleOpenModalWin="modalOpenHandler" />

  <teleport to="#modalWindow">
    <div v-if="isModalOpen" class="modalWindow" @click="modalOpenHandler">
      <div class="modalWindow__content" @click.stop>
        <slot name="windowContent" :toggleOpenModalWin="modalOpenHandler" />
      </div>
    </div>
  </teleport>
</template>
<script setup lang="ts">
import { ref } from "vue";
const isModalOpen = ref(false);
const modalOpenHandler = (): void => {
  isModalOpen.value = !isModalOpen.value;
};
</script>
<style lang="less" scoped>
@import "@/app/styles/vars.less";
.modalWindow {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: @black-lowOpacity;
  &__content {
    z-index: 1;
    position: fixed;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    min-width: 432px;
    min-height: 157px;

    background-color: #fff;

    padding: 20px;

    @media (min-width: @TV) {
      min-width: 800px;
      min-height: 250px;
      padding: 40px;
    }
    @media (max-width: @tablet) {
      min-width: 50%;
      min-height: max-content;
      padding: 15px;
    }
    @media (max-width: @mobile) {
      gap: 10px;
      min-width: 300px;
      min-height: max-content;
      padding: 10px;
    }
  }
}
</style>
