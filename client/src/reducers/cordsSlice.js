import { createSlice } from "@reduxjs/toolkit";

const initial = [0, 0]

export const cordsSlice = createSlice({
    name: "cords",
    initialState: {
        value: initial
    },
    reducers: {
        setCords: (state, action) => {
            state.value = action.payload
        },
        resetCords: (state) => {
            state.value = initial
        }
    }
})

export const {setCords, resetCords} = cordsSlice.actions

export default cordsSlice.reducer