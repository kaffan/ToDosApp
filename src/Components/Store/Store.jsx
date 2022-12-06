import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../Reducer/Reducer";

export const Store = configureStore({reducer: Reducer});