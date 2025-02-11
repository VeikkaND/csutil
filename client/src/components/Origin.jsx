import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setTutorial } from "../reducers/tutorialSlice"
import { setUrl } from "../reducers/urlSlice"
import { setID } from "../reducers/videoIDSlice"
import { setStyle } from "../reducers/styleSlice"

function Origin({left, top, parent, rotate, name, url, style}) {
    const dispatch = useDispatch()
    const selected = useSelector((state) => state.smoke.value)

    const handleClick = () => {
        //set video ID
        try {
            const regex = /(?<=\/embed\/).*?(?=\?)/
            const id = url.match(regex)
            dispatch(setID(id[0]))
        } catch(err) {
            console.log("ID not found")
        }
        dispatch(setTutorial(name))
        dispatch(setUrl(url))
        //set throw style
        switch(style) {
            case "jt":
                dispatch(setStyle("Left Click + Jump"))
                break;
            case "t":
                dispatch(setStyle("Left Click"))
                break;
        }
    }

    return(
        <button onClick={handleClick} style={{ left: left, top: top, 
            display: selected == parent ? "block" : "none", 
            rotate: `${rotate}deg`}} 
            id="arrow" >
            <img src={"arrow.svg"}></img>
        </button>
        
    )
}

export default Origin