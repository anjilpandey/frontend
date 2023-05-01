import { createStore } from "redux";
import counterReducer from "./counterReducer";


export const myStore=createStore(counterReducer)

