import axios from "axios";
axios.defaults.baseURL = "https://dummyjson.com";

const instanse = axios.create({});

export default instanse;
