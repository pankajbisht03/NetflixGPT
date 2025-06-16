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

        },
        addPopularMovies: (state, action) => {
            state.popularMovies=  action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upComingMovies = action.payload
        },
        addPopularShows:(state, action) => {
            console.log("action dispatched for shows")
            state.popularShows = action.paylod
        }

    }
})
export const {addNowPlayingMovies , addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addPopularShows} = moviesSlice.actions
export default moviesSlice.reducer