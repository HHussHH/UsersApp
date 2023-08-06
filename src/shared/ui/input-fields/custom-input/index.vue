<template>
  <div>
    <input
      class="custom-input"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
    />
    <div v-show="!pending" class="custom-input__error">
      <div v-for="el of error" :key="el.$uid">
        {{ el.$message }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(["update:value"]);
interface Props {
  error?: Array<any>;
  pending?: Boolean;
  value: string;
  name: string;
  type: string;
  placeholder: string;
  formatPhoneNumber: (value: string) => string;
}

const props = withDefaults(defineProps<Props>(), {
  value: "",
  type: "text",
});

const updateValue = (e: Event) => {
  const inputEvent = e as InputEvent;
  const inputData = inputEvent.target as HTMLInputElement;
  if (inputData.name === "phone") {
    emit(
      "update:value",
      (inputData.value = props.formatPhoneNumber(inputData.value))
    );
  }
  emit("update:value", inputData.value);
};
</script>

<style lang="less" scoped>
@import "@/app/styles/vars.less";

.custom-input {
  width: 100%;
  padding: 7px;
  border: 1px solid @gray;
  border-radius: 5px;

  @media (min-width: @TV) {
    padding: 10px;
    font-size: 18px;
  }

  &__error {
    font-weight: 600;
    color: red;
    height: 15px;
    font-size: 12px;
    @media (min-width: @TV) {
      font-size: 18px;
    }
  }
}
</style>
