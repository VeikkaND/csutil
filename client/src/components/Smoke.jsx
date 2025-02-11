import { useDispatch, useSelector } from "react-redux"
import { setSmoke, resetSmoke } from "../reducers/smokeSlice"
import { resetUrl, setUrl } from "../reducers/urlSlice"
import { setID, resetID } from "../reducers/videoIDSlice"

function Smoke({left, top, name, url}) {
    const dispatch = useDispatch()
    const smokeSelected = useSelector(
        (state) => state.smoke.value)
    const smokesEnabled = useSelector(
        (state) => state.smokes.value)

    const handleClick = (event) => {
        if(smokeSelected != name) {
            //set video ID
            try {
                const regex = /(?<=\/embed\/).*?(?=\?)/
                const id = url.match(regex)
                dispatch(setID(id[0]))
            } catch(err) {
                console.log("ID not found")
            }
            dispatch(setSmoke(name))
            dispatch(setUrl(url))
        } else {
            dispatch(resetSmoke())
            dispatch(resetUrl())
            dispatch(resetID())
        }
        // possibly add multiple throw locations??
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