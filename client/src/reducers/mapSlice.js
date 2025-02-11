import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
    name: "map",
    initialState: {
        value: null
    },
    reducers: {
        setMap: (state, action) => {
            state.value = action.payload
        },
        resetMap: (state) => {
            state.value = null
        }
    }
})

export const {setMap, resetMap} = mapSlice.actions

export default mapSlice.reducer