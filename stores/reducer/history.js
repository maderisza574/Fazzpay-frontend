const initialState = {
  data: [],

  isError: false,
  message: "",
};

const gethistory = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATAHISTORY_PENDING":
      return {
        ...state,
        data: [],
      };
    case "GET_DATAHISTORY_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isError: false,
        message: "",
      };
    case "GET_DATAHISTORY_REJECTED":
      return {
        ...state,
        isError: true,
        message: action.payload.response.data.msg,
        data: [],
      };
  }
  return state;
};
export default gethistory;
