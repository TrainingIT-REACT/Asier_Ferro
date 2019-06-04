import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promise from "redux-promise-middleware";

// Reducers
import reducers from "./reducers";

export default createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(promise))
);
