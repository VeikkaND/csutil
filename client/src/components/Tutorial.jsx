import { useSelector, useDispatch } from "react-redux"
import { resetSmoke } from "../reducers/smokeSlice"
import { useState } from "react"
import { resetID } from "../reducers/videoIDSlice"
import { resetUrl } from "../reducers/urlSlice"

function Tutorial() {
    const selected = useSelector((state) => state.smoke.value)
    const url = useSelector((state) => state.url.value)
    const dispatch = useDispatch()
    const [mode, setMode] = useState("video")

    const handleClose = () => {
        dispatch(resetSmoke())
        dispatch(resetID())
        dispatch(resetUrl())
    }

    return(
        <div className="tutorial" style={{
            display: selected == null ? "none" : "block"}}>
            <div className="topbar">
                <p>{selected}</p>
                <button onClick={handleClose}>close</button>
            </div>
            <div className="content">
                <img src={`${selected}.png`} style={{
                    display: mode == "video" ? "none" : "block"
                }}></img>
                {url ? (
                    <iframe src={url + "?&autoplay=1&mute=1&playlist=5SkRyZYHRp0&loop=1"}
                    width={700}
                    height={400}
                    title="Youtube video player"
                    allow="autoplay"
                    ></iframe>
                ) : (
                    <p>loading video...</p>
                )}
                
            </div>
        </div>
    )
}

export default Tutorial