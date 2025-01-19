import { configureStore } from "@reduxjs/toolkit"
import calloutReducer from "./reducers/calloutSlice"
import smokeReducer from "./reducers/smokeSlice"
import smokesReducer from "./reducers/smokesSlice"

export default configureStore({
    reducer: {
        callouts: calloutReducer,
        smoke: smokeReducer,
        smokes: smokesReducer
    }
})