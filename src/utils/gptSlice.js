import {createSlice} from "@reduxjs/toolkit"
const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGpt:false
    },
    reducers: {
        toggleGptState: (state, action) => {
        state.showGpt = !state.showGpt
    }}
})
export const {toggleGptState} = gptSlice.actions
export default gptSlice.reducer