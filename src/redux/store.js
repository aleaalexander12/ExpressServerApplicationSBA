import { configureStore } from "@reduxjs/toolkit";
import gifsReducer from "./gifsSlice";

export const store = configureStore({
    reducer: {
        gifs: gifsReducer,
    },
});
