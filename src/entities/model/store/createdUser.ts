import { defineStore } from "pinia";
import { customAlphabet } from "nanoid";
import { getUsersInfoStore } from "./getUsersInfo";
import { ICreatedUser } from "@/shared/api";
import { User } from "@/shared/api";
import { validate, clearError } from "@/features";

const rndId = customAlphabet("0123456789", 3);
const basePathToDefaultIcon = `${import.meta.env.BASE_URL}img/defaultIcon.svg`;
export const getCreatedUserStore = defineStore({
  id: "createdUser",
  state: () =>
    ({
      id: 0,
      image: basePathToDefaultIcon,
      firstName: "",
      email: "",
      phone: "",
      isError: false,
      inputData: [
        {
          name: "firstName",
          type: "text",
          placeholder: "Введите ваше имя",
        },
        {
          name: "email",
          type: "mail",
          placeholder: "Введите вашу почту",
        },
        {
          name: "phone",
          type: "text",
          placeholder: "Введите номер: +7-926-335-27-23",
        },
      ],
    } as ICreatedUser),
  actions: {
    createdUser(): void {
      const usersStore = getUsersInfoStore();
      const user: User = {
        image: this.image,
        firstName: this.firstName,
        email: this.email,
        phone: this.phone,
        id: +rndId(),
      };
      usersStore.initUsersData.unshift(user);
      usersStore.updateUserInfo();
      this.clearFields();
    },

    clearFields(): void {
      this.image = basePathToDefaultIcon;
      this.isError = false;
      validate.value.firstName.$model = "";
      validate.value.email.$model = "";
      validate.value.phone.$model = "";
      clearError();
    },
  },
  getters: {
    checkUniqueUserEmail(state): boolean {
      const usersStore = getUsersInfoStore();
      const isNotUniqueUser = usersStore.initUsersData.find(
        (user) => user.email === state.email
      );
      if (isNotUniqueUser) {
        this.isError = true;
        return false;
      }
      this.isError = false;
      return true;
    },
  },
});
