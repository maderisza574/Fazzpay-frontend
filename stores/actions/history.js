import axios from "../../utils/axios";

export const gethistory = () => ({
  type: "GET_DATAHISTORY",
  payload: axios.get(`/transaction/history?page=1&limit=2&filter=MONTH`),
});
