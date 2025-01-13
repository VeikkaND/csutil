import { createSlice } from "@reduxjs/toolkit";

export const calloutSlice = createSlice({
    name: "callouts",
    initialState: {
        value: true,
    },
    reducers: {
        setCallouts: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setCallouts } = calloutSlice.actions

export default calloutSlice.reducer