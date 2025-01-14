import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { setSmoke, resetSmoke } from "../reducers/smokeSlice"

function Smoke({left, top, name}) {
    const [selected, setSelected] = useState(false)
    const dispatch = useDispatch()
    const smokeSelected = useSelector(
        (state) => state.smoke.value)

    const handleClick = (event) => {
        console.log("TODO")
        if(!selected) {
            setSelected(true)
            dispatch(setSmoke(name))
        } else {
            setSelected(false)
            dispatch(resetSmoke())
        }
        // possibly add multiple throw locations??
    }
    return(
        <button style={{left: `${left}px`, top: `${top}px`, 
        display: smokeSelected != name && smokeSelected != null ? 
        "none" : "block"}} 
          onClick={handleClick} id='smoke'>test</button>
    )
}

export default Smoke