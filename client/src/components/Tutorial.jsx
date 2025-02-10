import { useSelector, useDispatch } from "react-redux"
import { resetSmoke } from "../reducers/smokeSlice"
import ReactPlayer from "react-player"

function Tutorial() {
    const selected = useSelector((state) => state.smoke.value)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(resetSmoke())
    }

    return(
        <div className="tutorial" style={{
            display: selected == null ? "none" : "block"}}>
            <div className="topbar">
                <p>{selected}</p>
                <button onClick={handleClose}>close</button>
            </div>
            <div className="content">
                <img src={`${selected}.png`}></img>
            </div>
        </div>
    )
}

export default Tutorial