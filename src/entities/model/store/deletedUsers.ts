import { defineStore } from "pinia";
import { getUsersInfoStore } from "./getUsersInfo";
import { User } from "@/shared/api";
import { IdeletedUsersState } from "@/shared/api";

export const getDeletedUsersStore = defineStore({
  id: "deletedUsers",
  state: () =>
    ({
      deletedUsers: [],
      error: "",
    } as IdeletedUsersState),
  actions: {
    deletedUsersHandler(user: User) {
      const userInfo = getUsersInfoStore();
      this.deletedUsers.push({
        id: user.id,
        firstName: user.firstName,
        image: user.image,
        email: user.email,
        phone: user.phone,
      });
      userInfo.updateUserInfo();
    },
    recoveryUsersHandler(user: User) {
      const userInfo = getUsersInfoStore();
      this.deletedUsers = this.deletedUsers.filter(
        (delUser) => delUser.id !== user.id
      );
      userInfo.updateUserInfo();
    },
  },
});
