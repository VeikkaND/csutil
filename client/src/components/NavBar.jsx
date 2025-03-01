import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { setCallouts } from "../reducers/calloutSlice"
import { setSmokes } from "../reducers/smokesSlice"
import { resetTutorial } from "../reducers/tutorialSlice"
import { resetSmoke } from "../reducers/smokeSlice"
import { resetID } from "../reducers/videoIDSlice"
import { resetUrl } from "../reducers/urlSlice"
import { resetStyle } from "../reducers/styleSlice"
import { resetCords } from "../reducers/cordsSlice"
import { resetInfo } from "../reducers/infoSlice"

function NavBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleReturn = () => {
        dispatch(setCallouts(true))
        dispatch(setSmokes(true))
        dispatch(resetSmoke())
        dispatch(resetID())
        dispatch(resetUrl())
        dispatch(resetStyle())
        dispatch(resetTutorial())
        dispatch(resetCords())
        dispatch(resetInfo())
        navigate("/")
    }

    return(
        <div className="navbar">
            <h1 onClick={handleReturn}></h1>
        </div>
    )
}

export default NavBar