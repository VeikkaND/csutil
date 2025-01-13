import { configureStore } from "@reduxjs/toolkit"
import calloutReducer from "./reducers/calloutSlice"

export default configureStore({
    reducer: {
        callouts: calloutReducer
    }
})