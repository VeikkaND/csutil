import { useState } from "react"
import { useDispatch } from "react-redux"
import { setCallouts } from "../reducers/calloutSlice"
import { setSmokes } from "../reducers/smokesSlice"

function ToolBar() {
    const [callouts, toggleCallouts] = useState(true)
    const [smokes, toggleSmokes] = useState(true)
    const dispatch = useDispatch()

    const handleCallouts = () => {
        const val = !callouts
        toggleCallouts(val)
        dispatch(setCallouts(val))
    }

    const handleSmokes = () => {
        const val = !smokes
        toggleSmokes(val)
        dispatch(setSmokes(val))
        //TODO handle event where smokes get toggled while 
        //having one selected
    }

    return(
        <div className="toolbar">
            <input type="checkbox" name="callouts" 
            checked={callouts} onChange={handleCallouts}></input>
            <label>callouts</label>
            <input type="checkbox" name="smokes"
            checked={smokes} onChange={handleSmokes} />
            <label>smokes</label>
        </div>
    )
}

export default ToolBar