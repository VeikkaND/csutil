import { configureStore } from "@reduxjs/toolkit"
import calloutReducer from "./reducers/calloutSlice"
import smokeReducer from "./reducers/smokeSlice"

export default configureStore({
    reducer: {
        callouts: calloutReducer,
        smoke: smokeReducer
    }
})