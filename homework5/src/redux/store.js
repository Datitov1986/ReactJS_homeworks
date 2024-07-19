import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";

export const store = configureStore({
    reducer: {
        themeRed : themeReducer,
    },
});

export default store;