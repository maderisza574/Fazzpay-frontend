import { combineReducers } from "redux";

import counter from "./counter";
import dashboard from "./dashboard";

export default combineReducers({
  counter,
  dashboard,
});
