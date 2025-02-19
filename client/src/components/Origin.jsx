import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setTutorial } from "../reducers/tutorialSlice"
import { setUrl } from "../reducers/urlSlice"
import { setID } from "../reducers/videoIDSlice"
import { setStyle } from "../reducers/styleSlice"
import { setInfo } from "../reducers/infoSlice"
import { useState } from "react"

function Origin({left, top, parent, name, url, style, info, ct}) {
    const dispatch = useDispatch()
    const selected = useSelector((state) => state.smoke.value)
    const cords = useSelector((state) => state.cords.value)
    const [hovering, setHovering] = useState(false)

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
            case "jt2":
                dispatch(setStyle("Left Right Click + Jump"))
                break;
            case "t":
                dispatch(setStyle("Left Click"))
                break;
            case "t2":
                dispatch(setStyle("Left Right Click"))
                break;
            case "jtr":
                dispatch(setStyle("Left Click + Jump + Run"))
                break;
            case "tr":
                dispatch(setStyle("Left Click + Run"))
                break;
        }
        if(info) dispatch(setInfo(info))
    }

    const handleMouseEnter = () => {
        setHovering(true)
    }

    const handleMouseLeave = () => {
        setHovering(false)
    }

    const hoverStyle = {
        left: left, 
        top: top, 
        display: selected == parent ? "block" : "none",
        backgroundColor: ct ? "dodgerblue" : "darkorange",
        transitionDuration: "0.4s" 
    }
    
    const nonhoverStyle = {
        left: left, 
        top: top, 
        display: selected == parent ? "block" : "none",
        backgroundColor: ct ? "skyblue" : "orange",
        transitionDuration: "0.4s" 
    }

    return(
        <>
        <button onClick={handleClick} style={hovering 
            ? hoverStyle 
            : nonhoverStyle} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="origin">
        </button>
        <svg style={{display: selected == parent ? 
            "block" : "none"}}
            id="line" viewBox="0,0,900,900">
            {cords 
            ? <polyline points={`${left+10},${top+10} ${cords[0]+25}, ${cords[1]+25}`} fill="none" stroke={ct ? "deepskyblue" : "yellow"}/> 
            : <p>failed to load</p>}
            
        </svg>
        </>
        
        
    )
}

export default Origin