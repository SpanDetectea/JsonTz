import { combineReducers, createStore } from "redux";
import jsonDataReducer from "./jsonDataReducer";

let reducers = combineReducers({
    jsonData: jsonDataReducer
});

const store = createStore(reducers);

window.store = store;

 export default store;