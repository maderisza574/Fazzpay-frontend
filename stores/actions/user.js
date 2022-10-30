import axios from "../../utils/axios";

export const getDataUserById = (userId) => ({
  type: "GET_DATAUSER_BYID",
  payload: axios.get(`/user/profile/${userId}`),
});
