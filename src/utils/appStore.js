import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    }
})

console.log(appStore.getState(), "store");

export default appStore