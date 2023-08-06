<template>
  <div class="custom-fileInput">
    <span>{{ title }}</span>
    <input
      type="file"
      ref="fileInput"
      style="display: none"
      name="myImage"
      :accept="`${type}/*`"
      @change="$emit('handleFileInput', fileImage, $event)"
    />

    <CustomButton
      type="button"
      color="primary"
      :rounded="true"
      @click="fileInput?.click()"
      label="Выбрать файл"
    ></CustomButton>
  </div>
  <img :src="fileImage.src" class="custom-fileInput__img" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CustomButton } from "@/shared/ui";
defineProps<{
  fileImage: {
    src: string;
  };
  type: string;
  title: string;
}>();
defineEmits<{
  handleFileInput: [fileImage: { src: string }, event: Event];
}>();
const fileInput = ref<HTMLInputElement | null>(null);
</script>

<style lang="less" scoped>
@import "@/app/styles/vars.less";
.custom-fileInput {
  position: relative;
  display: flex;
  align-items: center;

  @media (min-width: @TV) {
    font-size: 20px;
  }
  justify-content: space-between;
  input[type="file"] {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  &__img {
    width: 60px;
    height: 60px;
    @media (min-width: @TV) {
      width: 100px;
      height: 100px;
    }
    border-radius: 50px;
    border: 3px solid gray;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-bottom: 10px;
  }
}
</style>
