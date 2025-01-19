import { createSlice } from "@reduxjs/toolkit";

export const smokesSlilce = createSlice({
    name: "smokes",
    initialState: {
        value: true
    },
    reducers: {
        setSmokes: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setSmokes} = smokesSlilce.actions

export default smokesSlilce.reducer