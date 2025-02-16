import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setTutorial } from "../reducers/tutorialSlice"
import { setUrl } from "../reducers/urlSlice"
import { setID } from "../reducers/videoIDSlice"
import { setStyle } from "../reducers/styleSlice"

function Origin({left, top, parent, rotate, name, url, style}) {
    const dispatch = useDispatch()
    const selected = useSelector((state) => state.smoke.value)
    const cords = useSelector((state) => state.cords.value)

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
        <>
        <button onClick={handleClick} style={{ left: left, top: top, 
            display: selected == parent ? "block" : "none", 
            rotate: `${rotate}deg`}} 
            id="arrow" >
            <img src={"arrow.svg"}></img>
        </button>
        <svg style={{display: selected == parent ? 
            "block" : "none"}}
            id="line" viewBox="0,0,900,900">
            {cords 
            ? <polyline points={`${left+10},${top+10} ${cords[0]+25}, ${cords[1]+25}`} fill="none" stroke="yellow"/> 
            : <p>failed to load</p>}
            
        </svg>
        </>
        
        
    )
}

export default Origin