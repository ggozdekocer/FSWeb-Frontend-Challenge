import { createStore } from "redux";
import settingsReducer from "./settingsReducer";

export const store = createStore(settingsReducer);