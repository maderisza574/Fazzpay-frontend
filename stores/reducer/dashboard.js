const initialState = {
  data: {},
  isloading: false,
  isError: false,
  message: "",
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DASHBOARD_BYID_PENDING":
      return {
        ...state,
        isloading: true,
      };
    case "GET_DASHBOARD_BYID_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data[0],
        isLoading: false,
        isError: false,
        message: "",
      };
    case "GET_DASHBOARD_BYID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.msg,
        data: {},
      };
  }
  return state;
};
export default dashboard;
