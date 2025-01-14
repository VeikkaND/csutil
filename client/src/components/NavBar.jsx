import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { setCallouts } from "../reducers/calloutSlice"

function NavBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleReturn = () => {
        dispatch(setCallouts(true))
        navigate("/")
    }

    return(
        <div className="navbar">
            <h1 onClick={handleReturn}>CSutil</h1>
        </div>
    )
}

export default NavBar