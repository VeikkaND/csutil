import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
    name: "info",
    initialState: {
        value: null
    },
    reducers: {
        setInfo: (state, action) => {
            state.value = action.payload
        },
        resetInfo: (state) => {
            state.value = null
        }
    }
})

export const { setInfo, resetInfo } = infoSlice.actions

export default infoSlice.reducer