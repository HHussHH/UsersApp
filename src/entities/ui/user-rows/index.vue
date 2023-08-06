<template>
  <ul class="userList">
    <li
      class="userList__user"
      v-for="user in userStore.getUsers"
      :key="user.id"
    >
      <UserCard
        :image="user.image"
        :firstName="user.firstName"
        :email="user.email"
        :phone="user.phone"
        :id="user.id"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { getUsersInfoStore } from "@/entities/model";

import UserCard from "@/entities/ui/user-card";
const userStore = getUsersInfoStore();
</script>

<style lang="less" scoped>
@import "@/app/styles/vars.less";
.userList {
  margin-top: 56px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__user {
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 120px;
    border: 1px solid @gray;
    border-radius: 6px;

    &:hover {
      background-color: @gray;
    }
    @media (min-width: @TV) {
      height: 150px;
      border: 2px solid @gray;
      border-radius: 8px;
    }
  }
}
</style>
