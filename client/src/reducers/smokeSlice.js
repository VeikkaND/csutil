import { createSlice } from "@reduxjs/toolkit";

export const smokeSlice = createSlice({
    name: "smoke",
    initialState: {
        value: null
    },
    reducers: {
        setSmoke: (state, action) => {
            state.value = action.payload
        },
        resetSmoke: (state) => {
            state.value = null
        }
    }
})

export const { setSmoke, resetSmoke } = smokeSlice.actions

export default smokeSlice.reducer