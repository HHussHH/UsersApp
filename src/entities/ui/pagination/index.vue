<template>
  <slot :loadMorePages="loadMorePages" :loadLessPages="loadLessPages" />
</template>
<script setup lang="ts">
import { watchEffect } from "vue";

import { loadPage, backLoadPage } from "@/features";
const { pgn } = defineProps<{
  pgn: {
    perPage: number;
    nextPage: number;
    initPage: number;
    total: number;
  };
}>();

const loadMorePages = () => {
  pgn.perPage = loadPage(pgn.perPage, pgn.nextPage, pgn.total);
};
const loadLessPages = () => {
  pgn.perPage = backLoadPage(pgn.perPage, pgn.initPage);
};
watchEffect(() => {
  if (pgn.perPage >= pgn.total) {
    loadMorePages();
  }
});
</script>
