//create redux store😜
import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";

import { thunk } from "redux-thunk";

import NumReducer from "./NumStatus/reducer.ts";
import ArrReducer from "./ArrStatus/reducer.ts";
// import XxxReducer from "./ExxxxStatus/reducer.ts";👈🏼

//combine all the reducers into one
const reducers = combineReducers({
  NumReducer,
  ArrReducer,
  // XxxReducer👈🏼
});
//========================Before redux-thunk=======================================
/*create data repository
const store = legacy_createStore(
  reducers,
  // active chrome extension redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/

//======================== After redux-thunk =======================================
//update dev tools
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
