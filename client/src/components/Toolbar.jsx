import { useState } from "react"
import { useDispatch } from "react-redux"
import { setCallouts } from "../reducers/calloutSlice"
import { setSmokes } from "../reducers/smokesSlice"
import { useSelector } from "react-redux"
import { resetSmoke } from "../reducers/smokeSlice"
import { resetID } from "../reducers/videoIDSlice"
import { resetUrl } from "../reducers/urlSlice"
import { resetStyle } from "../reducers/styleSlice"
import { resetTutorial } from "../reducers/tutorialSlice"
import { resetCords } from "../reducers/cordsSlice"
import { resetInfo } from "../reducers/infoSlice"
import { useNavigate } from "react-router"

function ToolBar() {
    const [callouts, toggleCallouts] = useState(true)
    const [smokes, toggleSmokes] = useState(true)
    const selected = useSelector((state) => state.smoke.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleBack = () => {
        dispatch(setCallouts(true))
        dispatch(setSmokes(true))
        resetAll()
        navigate("/")
    }

    const handleCallouts = () => {
        const val = !callouts
        toggleCallouts(val)
        dispatch(setCallouts(val))
    }

    const handleSmokes = () => {
        const val = !smokes
        toggleSmokes(val)
        dispatch(setSmokes(val))
        // reset selected smoke if toggling smokes while
        // having one selected
        if(!val && selected) { 
            resetAll()
        }
    }

    const resetAll = () => {
        dispatch(resetSmoke())
        dispatch(resetID())
        dispatch(resetUrl())
        dispatch(resetStyle())
        dispatch(resetTutorial())
        dispatch(resetCords())
        dispatch(resetInfo())
    }

    return(
        <div className="toolbar">
            <div className="back">
                <button onClick={handleBack}>
                    Back
                </button>
            </div>
            <div className="tools">
                <div className="tool">
                    <input type="checkbox" name="callouts" 
                    checked={callouts} onChange={handleCallouts}></input>
                    <label>Callouts</label>
                </div>
                <div className="tool">
                    <input type="checkbox" name="smokes"
                    checked={smokes} onChange={handleSmokes} />
                    <label>Smokes</label>
                </div>
            </div>
            <div className="filler"></div>
        </div>
    )
}

export default ToolBar