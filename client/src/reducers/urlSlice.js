import { createSlice } from "@reduxjs/toolkit";

export const urlSlice = createSlice({
    name: "url",
    initialState: {
        value: null
    },
    reducers: {
        setUrl: (state, action) => {
            state.value = action.payload
        },
        resetUrl: (state) => {
            state.value = null
        }
    }
})

export const {setUrl, resetUrl} = urlSlice.actions

export default urlSlice.reducer