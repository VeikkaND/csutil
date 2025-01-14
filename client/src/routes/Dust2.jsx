import { useSelector } from "react-redux"
import { TransformWrapper, 
    TransformComponent } from "react-zoom-pan-pinch"
import ToolBar from "../components/Toolbar"
import Smoke from "../components/Smoke"
import dust2 from "../../../maps/dust2.jpg"
import NavBar from "../components/NavBar"
import Origin from "../components/Origin"

function Dust2() {
    const calloutsEnabled = useSelector(
        (state) => state.callouts.value)

    return(
    <div>
        <NavBar />
        <ToolBar /> 
        <TransformWrapper doubleClick={{disabled: true}}>
            <TransformComponent>
                <img src={dust2}></img>
                <Smoke left={210} top={200} name={"bdoor"}/>
                <Smoke left={80} top={280} name={"tunnel1"}/>
                <Smoke left={500} top={300} name={"test_spot"}/>
                <Origin left={450} top= {370} 
                parent={"test_spot"} rotate={40}/>
                <label style={{left: "80px", top: "100px", 
                display: calloutsEnabled ? "block" : "none"}} 
                id='callout'>test label</label>
            </TransformComponent>
        </TransformWrapper>
    </div>
    )
}

export default Dust2