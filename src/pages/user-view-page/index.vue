<template>
  <Container> <component :is="loadCurrentComp" /> </Container>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Container } from "@/shared/ui";
import { getUsersInfoStore } from "@/entities/model";
import { LoadingPage } from "../loading-page";
import { NotFoundPage } from "../not-found-page";
import { UserPage } from "../user-page";
const usersStore = getUsersInfoStore();

const loadCurrentComp = computed(() => {
  switch (usersStore.loading) {
    case "loading": {
      return LoadingPage;
    }
    case "received": {
      return UserPage;
    }
    case "rejected": {
      return NotFoundPage;
    }
    default: {
      return NotFoundPage;
    }
  }
});
</script>

<style></style>
