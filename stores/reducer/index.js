import { combineReducers } from "redux";

import counter from "./counter";
import user from "./user";
import history from "./history";

export default combineReducers({
  counter,
  user,
  history,
});
