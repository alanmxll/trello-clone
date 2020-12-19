import { combineReducers } from "redux";
import listsReducer from "./Lists/reducers/reducer";

const rootReducer = combineReducers({ listsReducer });

export default rootReducer;
