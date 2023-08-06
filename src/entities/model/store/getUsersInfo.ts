import { defineStore } from "pinia";
import { getDeletedUsersStore } from "./deletedUsers";
import { index as userIndex } from "@/shared/api";
import { UsersInfoState } from "@/shared/api";
import { User } from "@/shared/api";

export const getUsersInfoStore = defineStore({
  id: "usersInfo",
  state: () =>
    ({
      initUsersData: [],
      usersData: [],
      loading: "idle",
      error: "",
      currentViewCount: 5,
    } as UsersInfoState),
  actions: {
    async fetchUsers() {
      try {
        this.loading = "loading";
        this.usersData = await userIndex();
        this.initUsersData = this.usersData;
        this.currentViewCount = 5;
        this.loading = "received";
      } catch (error: any) {
        this.error = error.message;
        this.loading = "rejected";
      }
    },
    updateUserInfo() {
      const deletedUsersStore = getDeletedUsersStore();
      const deletedArray = deletedUsersStore.deletedUsers;
      this.usersData = this.initUsersData.filter(
        (user) =>
          !deletedArray.some((deletedUser) => deletedUser.id === user.id)
      );
    },
  },
  getters: {
    getUsers: (state: UsersInfoState): User[] => {
      return state.usersData.slice(0, state.currentViewCount);
    },
    errorHadler: (state: UsersInfoState): string => {
      return `${state.error}. Пожалуйста, перезапустите сайт`;
    },
    totalCount: (state: UsersInfoState): number => {
      return state.usersData.length;
    },
    showMoreBtn: (state: UsersInfoState): boolean => {
      if (state.currentViewCount !== state.usersData.length) {
        return true;
      }
      return false;
    },
    showLessBtn: (state: UsersInfoState): boolean => {
      if (state.currentViewCount > 5) {
        return true;
      }
      return false;
    },
  },
});
