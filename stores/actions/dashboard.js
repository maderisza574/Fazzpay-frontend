import axios from "../../utils/axios";

export const getdashboardbyId = (userId) => ({
  type: "GET_DASHBOARD_BYID",
  payload: axios.get(`/dashboard/${userId}`),
});
