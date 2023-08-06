<template>
  <div class="delList">
    <h2 class="delList__title">Удаленные пользователи</h2>
    <ul class="delList__list">
      <li v-for="user in delUserStore.deletedUsers" :key="user.id">
        <ModalWindow>
          <template #btn="{ toggleOpenModalWin }">
            <DeletedUserCard
              @click="toggleOpenModalWin"
              :image="user.image"
              :firstName="user.firstName"
              :email="user.email"
              :phone="user.phone"
              :userId="user.id"
            />
          </template>
          <template #windowContent="{ toggleOpenModalWin }">
            <RecoveryUsersWindow
              :toggleOpenModalWin="toggleOpenModalWin"
              :user="{
                image: user.image,
                firstName: user.firstName,
                email: user.email,
                phone: user.phone,
                id: user.id,
              }"
            />
          </template>
        </ModalWindow>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getDeletedUsersStore } from "@/entities/model";
import {
  RecoveryUsersWindow,
  ModalWindow,
  DeletedUserCard,
} from "@/entities/ui";
const delUserStore = getDeletedUsersStore();
</script>

<style lang="less" scoped>
@import "@/app/styles/vars.less";

.delList {
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  &__title {
    text-align: center;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 17px;

    @media (max-width: @tablet) {
      gap: 10px;
    }
  }
}
</style>
