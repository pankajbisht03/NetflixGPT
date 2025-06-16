import {createSlice} from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailer:null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            console.log("Reducer called with:", action.payload)
            state.nowPlayingMovies=  action.payload
        },
        addMovieTrailer:(state, action) => {
            state.movieTrailer = action.payload

        }

    }
})
export const {addNowPlayingMovies , addMovieTrailer} = moviesSlice.actions
export default moviesSlice.reducer