import Routing from "./index.vue";

export const routes = [
  {
    path: "/",
    name: "usersView",
    component: () => import("./user-view-page"),
  },
];

export { Routing };
