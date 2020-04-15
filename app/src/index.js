import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./store/reducers";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

const store = createStore(rootReducer, applyMiddleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
