import { useDispatch, useSelector } from "react-redux"
import { setSmoke, resetSmoke } from "../reducers/smokeSlice"
import { resetUrl } from "../reducers/urlSlice"
import { resetID } from "../reducers/videoIDSlice"
import { resetStyle } from "../reducers/styleSlice"
import { resetTutorial } from "../reducers/tutorialSlice"
import { setCords, resetCords } from "../reducers/cordsSlice"
import { resetInfo } from "../reducers/infoSlice"

function Smoke({left, top, name}) {
    const dispatch = useDispatch()
    const smokeSelected = useSelector(
        (state) => state.smoke.value)
    const smokesEnabled = useSelector(
        (state) => state.smokes.value)

    const handleClick = () => {
        if(smokeSelected != name) {
            dispatch(setSmoke(name))
            dispatch(setCords([left, top]))
        } else {
            dispatch(resetSmoke())
            dispatch(resetUrl())
            dispatch(resetID())
            dispatch(resetStyle())
            dispatch(resetTutorial())
            dispatch(resetCords())
            dispatch(resetInfo())
        }
    }
    return(
        <>
            <button style={{left: `${left}px`, top: `${top}px`, 
            display: (smokeSelected != name && smokeSelected != null) || !smokesEnabled ? 
            "none" : "block"}} onClick={handleClick} 
            id='smoke'></button>
        </>
        
    )
}

export default Smoke