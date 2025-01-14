import { useSelector, useDispatch } from "react-redux"
import { resetSmoke } from "../reducers/smokeSlice"

function Tutorial({name}) {
    const selected = useSelector((state) => state.smoke.value)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(resetSmoke())
    }

    return(
        <div className="tutorial" 
        style={{display: selected == name ? "flex" : "none"}}>
            <img src={`${name}.png`}></img>
            <button onClick={handleClose}>close</button>
        </div>
    )
}

export default Tutorial