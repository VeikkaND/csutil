import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import NavBar from "../components/NavBar";
import ToolBar from "../components/Toolbar";
import Tutorial from "../components/Tutorial";
import anubis from "../../../maps/anubis.png"

function Anubis() {

    return(
        <div>
            <NavBar />
            <ToolBar />
            <Tutorial />
            <TransformWrapper doubleClick={{disabled: true}}>
                <TransformComponent wrapperStyle={{margin: "auto"}}>
                    <img src={anubis}></img>
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default Anubis