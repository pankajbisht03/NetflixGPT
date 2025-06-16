import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice";
import gptSlice from "./gptSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt:gptSlice,
    }
})

console.log(appStore.getState(), "store");

export default appStore