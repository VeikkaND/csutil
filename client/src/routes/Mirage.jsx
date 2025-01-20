import { TransformComponent, 
    TransformWrapper } from "react-zoom-pan-pinch";
import NavBar from "../components/NavBar";
import ToolBar from "../components/Toolbar";
import mirage from "../../../maps/mirage.png"


function Mirage() {

    return(
        <div>
            <NavBar />
            <ToolBar />
            <TransformWrapper doubleClick={{disabled: true}}>
                <TransformComponent wrapperStyle={{margin: "auto"}}>
                    <img src={mirage}></img>
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default Mirage