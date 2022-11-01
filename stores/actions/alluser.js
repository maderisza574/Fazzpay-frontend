import axios from "../../utils/axios";

export const getAllUser = () => ({
  type: "GET_ALL_USER",
  payload: axios.get(`/user?page=1&limit=50&search=&sort=firstName ASC`),
});
