import { createStore } from "redux";
import ThemeReducer  from "./Reducer/ThemeReducer";

const Store = createStore(ThemeReducer);

export default Store;