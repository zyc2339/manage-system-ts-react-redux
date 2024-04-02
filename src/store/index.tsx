//create redux store😜
import { legacy_createStore, combineReducers } from "redux";

import NumReducer from "./NumStatus/reducer.ts";
import ArrReducer from "./ArrStatus/reducer.ts";

//combine all the reducers into one
const reducers = combineReducers({
  NumReducer,
  ArrReducer,
});

//create data repository
const store = legacy_createStore(
  reducers,
  // active chrome extension redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
