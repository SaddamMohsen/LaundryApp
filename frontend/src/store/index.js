import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import authReducer from "./reducer/auth.reducer";

const reducer = combineReducers({
 
  auth: authReducer,
 
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;