const initialState = {
  data: [],

  isError: false,
  message: "",
};

const datauser = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATAUSER_BYID_PENDING":
      return {
        ...state,
        data: [],
      };
    case "GET_DATAUSER_BYID_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isError: false,
        message: "",
      };
    case "GET_DATAUSER_BYID_REJECTED":
      return {
        ...state,
        isError: true,
        message: action.payload.response.data.msg,
        data: [],
      };
  }
  return state;
};
export default datauser;
