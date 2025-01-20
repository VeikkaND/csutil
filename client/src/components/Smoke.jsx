import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { setSmoke, resetSmoke } from "../reducers/smokeSlice"
import { setCords, resetCords } from "../reducers/cordsSlice"
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

            // guide cords logic:
            // TODO change left value as well if needed (not shown fully)
            if(top <= 250) {
                dispatch(setCords([left-175, top+100]))
            } else {
                dispatch(setCords([left-175, top-250]))
            }
        } else {
            dispatch(resetSmoke())
            dispatch(resetCords())
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