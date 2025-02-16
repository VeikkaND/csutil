import { createSlice } from "@reduxjs/toolkit";

export const cordsSlice = createSlice({
    name: "cords",
    initialState: {
        value: null
    },
    reducers: {
        setCords: (state, action) => {
            state.value = action.payload
        },
        resetCords: (state) => {
            state.value = null
        }
    }
})

export const { setCords, resetCords } = cordsSlice.actions

export default cordsSlice.reducer