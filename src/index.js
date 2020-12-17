import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import multi from "redux-multi";
import promise from "redux-promise";
import thunk from "redux-thunk";

import rootReducer from "./store/rootReducer";

import App from "./App";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = applyMiddleware(multi, promise, thunk)(createStore)(
  rootReducer,
  devTools
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
