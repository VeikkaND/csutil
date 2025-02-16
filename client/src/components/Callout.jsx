import { useSelector } from "react-redux"

function Callout({left, top, name, size, rotate}) {
    const calloutsEnabled = useSelector(
        (state) => state.callouts.value)

    
    if(name == "A" || name == "B") {
        // return site name 
        return (
            <label style={{left: `${left}px`, top: `${top}px`, 
            display: calloutsEnabled ? "block" : "none", 
            fontSize: 30, rotate: `${rotate}deg`, 
            color: "yellow", fontWeight: "bold", opacity: "70%"}} 
            id='callout'>{name}</label>
        )
    } else {
        // return regular callout
        return(
            <label style={{left: `${left}px`, top: `${top}px`, 
            display: calloutsEnabled ? "block" : "none", 
            fontSize: size, rotate: `${rotate}deg`}} 
            id='callout'>{name}</label>
        )
    }
}

export default Callout