<template>
  <Container>
    <DeletedUserList v-show="deletedUsersStore.deletedUsers.length" />
    <UserList />
  </Container>
</template>

<script lang="ts" setup>
import { UserList, DeletedUserList } from "@/widgets";
import { Container } from "@/shared/ui";
import { getDeletedUsersStore } from "@/entities/model";
const deletedUsersStore = getDeletedUsersStore();
</script>

<style></style>
