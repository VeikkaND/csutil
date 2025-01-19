import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { setSmoke, resetSmoke } from "../reducers/smokeSlice"
import Tutorial from "./Tutorial"

function Smoke({left, top, name}) {
    const dispatch = useDispatch()
    const smokeSelected = useSelector(
        (state) => state.smoke.value)
    const smokesEnabled = useSelector(
        (state) => state.smokes.value)

    const handleClick = (event) => {
        console.log("TODO")
        if(smokeSelected != name) {
            dispatch(setSmoke(name))
        } else {
            dispatch(resetSmoke())
        }
        // possibly add multiple throw locations??
    }
    return(
        <>
            <button style={{left: `${left}px`, top: `${top}px`, 
            display: (smokeSelected != name && smokeSelected != null) || !smokesEnabled ? 
            "none" : "block"}} onClick={handleClick} 
            id='smoke'></button>
            <Tutorial name={name} />
        </>
        
    )
}

export default Smoke