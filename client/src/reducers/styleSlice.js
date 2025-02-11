import { createSlice } from "@reduxjs/toolkit";

export const styleSlice = createSlice({
    name: "style",
    initialState: {
        value: null
    },
    reducers: {
        setStyle: (state, action) => {
            state.value = action.payload
        },
        resetStyle: (state) => {
            state.value = null
        }
    }
})

export const {setStyle, resetStyle} = styleSlice.actions

export default styleSlice.reducer