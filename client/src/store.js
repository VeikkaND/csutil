import { configureStore } from "@reduxjs/toolkit"
import calloutReducer from "./reducers/calloutSlice"
import smokeReducer from "./reducers/smokeSlice"
import smokesReducer from "./reducers/smokesSlice"
import urlReducer from "./reducers/urlSlice"
import videoIDReducer from "./reducers/videoIDSlice"

export default configureStore({
    reducer: {
        callouts: calloutReducer,
        smoke: smokeReducer,
        smokes: smokesReducer,
        url: urlReducer,
        videoID: videoIDReducer,
    }
})