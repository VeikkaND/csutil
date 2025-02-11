import { createSlice } from "@reduxjs/toolkit";

export const tutorialSlice = createSlice({
    name: "tutorial",
    initialState: {
        value: null
    },
    reducers: {
        setTutorial: (state, action) => {
            state.value = action.payload
        },
        resetTutorial: (state) => {
            state.value = null
        }
    }
})

export const { setTutorial, resetTutorial } = tutorialSlice.actions

export default tutorialSlice.reducer