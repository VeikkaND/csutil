import { useState } from "react"
import { useDispatch } from "react-redux"
import { setCallouts } from "../reducers/calloutSlice"

function ToolBar() {
    const [callouts, toggleCallouts] = useState(true)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const val = !callouts
        toggleCallouts(val)
        dispatch(setCallouts(val))
    }

    return(
        <div className="toolbar">
            <input type="checkbox" name="callouts" 
            checked={callouts} onChange={handleChange}></input>
            <label>callouts</label>
        </div>
    )
}

export default ToolBar