import {createSlice} from "@reduxjs/toolkit"
const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGpt:false,
        tmdbResults:null,
        movieNames:null
    },
    reducers: {
        toggleGptState: (state, action) => {
        state.showGpt = !state.showGpt
    }, 
        addGptMovies: (state, action) => {
            const {movieNames, tmdbResults} = action.payload
            state.movieNames = movieNames;
            state.tmdbResults = tmdbResults
        }
},
    
})
export const {toggleGptState, addGptMovies} = gptSlice.actions
export default gptSlice.reducer