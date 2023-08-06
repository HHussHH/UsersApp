<script setup lang="ts">
import { Routing } from "../pages";
import { onMounted } from "vue";
import { getUsersInfoStore } from "@/entities/model";

const userStore = getUsersInfoStore();
onMounted(() => {
  userStore.fetchUsers();
});
</script>

<template>
  <div class="app">
    <Routing />
  </div>
</template>

<style>
@import "./styles/index.less";
</style>
