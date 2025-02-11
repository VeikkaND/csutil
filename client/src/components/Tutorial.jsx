import { useSelector, useDispatch } from "react-redux"
import { resetSmoke } from "../reducers/smokeSlice"
import { useState } from "react"
import { resetID } from "../reducers/videoIDSlice"
import { resetUrl } from "../reducers/urlSlice"
import { resetStyle } from "../reducers/styleSlice"

function Tutorial() {
    const selected = useSelector((state) => state.smoke.value)
    const url = useSelector((state) => state.url.value)
    const videoID = useSelector((state) => state.videoID.value)
    const style = useSelector((state) => state.style.value)
    const dispatch = useDispatch()
    const [mode, setMode] = useState("video")

    const handleClose = () => {
        dispatch(resetSmoke())
        dispatch(resetID())
        dispatch(resetUrl())
        dispatch(resetStyle())
    }

    return(
        <div className="tutorial" style={{
            display: selected == null ? "none" : "block"}}>
            <div className="topbar">
                <p>{selected}</p>
                <button onClick={handleClose}>close</button>
            </div>
            <div className="content">
                {url && videoID ? (
                    <iframe src={url + `?&autoplay=1&mute=1&playlist=${videoID}&loop=1&vq=1080hp`}
                    title="Youtube video player"
                    allow="autoplay"
                    ></iframe>
                ) : (
                    <p>loading video...</p>
                )}
                <div className="info">
                    <h3>Precise:</h3>
                    <img src={`${selected}.png`}></img>
                    <p>{style}</p>
                </div>
            </div>
        </div>
    )
}

export default Tutorial