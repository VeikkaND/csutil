import { createSlice } from "@reduxjs/toolkit";

export const videoIDSlice = createSlice({
    name: "videoID",
    initialState: {
        value: null
    },
    reducers: {
        setID: (state, action) => {
            state.value = action.payload
        },
        resetID: (state) => {
            state.value = null
        }
    }
})

export const {setID, resetID} = videoIDSlice.actions

export default videoIDSlice.reducer