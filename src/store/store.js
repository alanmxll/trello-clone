import { createStore, applyMiddleware } from "redux";
import multi from "redux-multi";
import promise from "redux-promise";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = applyMiddleware(multi, promise, thunk)(createStore)(
  rootReducer,
  devTools
);
