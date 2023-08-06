<template>
  <UserRows />
  <PaginationSystem :pgn="pagination" v-slot="{ loadMorePages, loadLessPages }">
    <NextPageBtns
      :total="pagination.total"
      :perPage="pagination.perPage"
      :showMoreBtn="userStore.showMoreBtn"
      :showLessBtn="userStore.showLessBtn"
      @loadMorePages="loadMorePages"
      @loadLessPages="loadLessPages"
    />
  </PaginationSystem>
</template>

<script lang="ts" setup>
import { reactive, toRef } from "vue";

import { NextPageBtns, PaginationSystem, UserRows } from "@/entities/ui";
import type { Pagination } from "@/shared/api";
import { getUsersInfoStore } from "@/entities/model";
const userStore = getUsersInfoStore();

const pagination = reactive({
  perPage: toRef(userStore, "currentViewCount"),
  nextPage: 5,
  initPage: 5,
  total: toRef(userStore, "totalCount"),
} as Pagination);
</script>
