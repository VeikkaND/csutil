import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { setMap } from "../reducers/mapSlice"

function MapButton({name, text}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRedirect = () => {
        dispatch(setMap(name))
        navigate(name)
    }

    return(
        <button onClick={handleRedirect} style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), 
            rgba(0,0,0,0.3)), url(thumbnails/${name}_thumb.png)`
        }}>
            <img src={`icons/${name}_icon.png`} id="icon"></img>
            <p>{text}</p>
        </button>
    )
}

export default MapButton