import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import documentReducer from "./documentReducer";
import educationReducer from "./educationReducer";

const rootReducer = combineReducers({
  document:documentReducer,
  contact: contactReducer,
  educaton: educationReducer
})

export default rootReducer;