import { Ref } from "vue";

export type Pagination = {
  perPage: Ref<number>;
  nextPage: number;
  initPage: number;
  total: Ref<number>;
};
