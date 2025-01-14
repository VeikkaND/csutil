import { useSelector } from "react-redux"

function Origin({left, top, parent, rotate}) {
    const selected = useSelector((state) => state.smoke.value)

    return(
        <img src={"arrow.svg"} style={{ left: left, top: top, 
            display: selected == parent ? "block" : "none", 
            rotate: `${rotate}deg`}} 
            id="arrow">
        </img>
    )
}

export default Origin