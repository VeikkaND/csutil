import { useSelector } from "react-redux"

function Callout({left, top, name, size}) {
    const calloutsEnabled = useSelector(
        (state) => state.callouts.value)

    return(
        <label style={{left: `${left}px`, top: `${top}px`, 
            display: calloutsEnabled ? "block" : "none", 
            fontSize: size}} 
            id='callout'>{name}</label>
    )
}

export default Callout