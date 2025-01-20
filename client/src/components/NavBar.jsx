import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { setCallouts } from "../reducers/calloutSlice"
import { setSmokes } from "../reducers/smokesSlice"
import { resetCords } from "../reducers/cordsSlice"

function NavBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleReturn = () => {
        dispatch(setCallouts(true))
        dispatch(setSmokes(true))
        dispatch(resetCords())
        navigate("/")
    }

    return(
        <div className="navbar">
            <h1 onClick={handleReturn}></h1>
        </div>
    )
}

export default NavBar