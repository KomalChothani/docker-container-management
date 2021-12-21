import { combineReducers, createStore } from "redux";
import dockerContainerReducer from "./dockerContainerReducer";

const rootReducer = combineReducers({
    dockerContainerData: dockerContainerReducer,
});

export const store = createStore(rootReducer);
