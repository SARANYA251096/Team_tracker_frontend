import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { cardReducer } from "./cards/card.reducer";
import userReducer from "./users/user.reducer";

let rootReducer = combineReducers({
  userReducer: userReducer,
  cardReducer: cardReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
