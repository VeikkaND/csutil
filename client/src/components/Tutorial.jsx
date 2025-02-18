import { useSelector, useDispatch } from "react-redux"
import { resetSmoke } from "../reducers/smokeSlice"
import { resetID } from "../reducers/videoIDSlice"
import { resetUrl } from "../reducers/urlSlice"
import { resetStyle } from "../reducers/styleSlice"
import { resetTutorial } from "../reducers/tutorialSlice"
import { resetCords } from "../reducers/cordsSlice"
import { resetInfo } from "../reducers/infoSlice"

function Tutorial() {
    const map = useSelector((state) => state.map.value)
    const selected = useSelector((state) => state.smoke.value)
    const tutorial = useSelector((state) => state.tutorial.value)
    const url = useSelector((state) => state.url.value)
    const videoID = useSelector((state) => state.videoID.value)
    const style = useSelector((state) => state.style.value)
    const info = useSelector((state) => state.info.value)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(resetSmoke())
        dispatch(resetID())
        dispatch(resetUrl())
        dispatch(resetStyle())
        dispatch(resetTutorial())
        dispatch(resetCords())
        dispatch(resetInfo())
    }

    return(
        <div className="tutorial" style={{
            display: tutorial == null ? "none" : "block"}}>
            <div className="topbar">
                <p>{selected}</p>
                <button onClick={handleClose}>
                    <img src={"close.svg"} id="close"></img>
                </button>
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
                    <img src={`${map}/${tutorial}.png`}></img>
                    <p>{style}</p>
                    {info && <p id="info">{info}</p>}
                </div>
            </div>
        </div>
    )
}

export default Tutorial