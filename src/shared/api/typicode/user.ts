import api from "./base";

export type User = {
  image: string;
  firstName: string;
  email: string;
  phone: string;
  id: number;
};
type inputField = {
  [key: string]: string;
};
export interface IdeletedUsersState {
  deletedUsers: User[];
  error: string;
}
export interface ICreatedUser extends User {
  isError: boolean;
  id: number;
  inputData: inputField[];
}
export type UsersInfoPromise = {
  users: User[];
  limit: number;
  skip: number;
  select: string;
};

export type UsersInfoState = {
  initUsersData: User[];
  usersData: User[];
  loading: "idle" | "loading" | "received" | "rejected";
  error: string;
  currentViewCount: number;
};

export async function index() {
  const res = await api.get<UsersInfoPromise>(
    "/users?&limit=100&skip=0&select=firstName,id,image,phone,email"
  );

  return res.data.users;
}
