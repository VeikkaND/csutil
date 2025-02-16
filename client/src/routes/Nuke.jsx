import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import NavBar from "../components/NavBar";
import ToolBar from "../components/Toolbar";
import Tutorial from "../components/Tutorial";
import nuke from "../../../maps/nuke.png"
import Callout from "../components/Callout";

function Nuke() {

    return(
        <div>
            <NavBar />
            <ToolBar />
            <Tutorial />
            <TransformWrapper doubleClick={{disabled: true}}>
                <TransformComponent wrapperStyle={{margin: "auto"}}>
                    <img src={nuke}></img>

                    <Callout left={120} top={475} name={"T SPAWN"} size={30}/>
                    <Callout left={390} top={470} name={"LOBBY"} size={25}/>
                    <Callout left={425} top={560} name={"SILO"} size={20}/>
                    <Callout left={410} top={515} name={"SQUEAKY"}/>
                    <Callout left={425} top={415} name={"TROPHY"}/>
                    <Callout left={480} top={595} name={"OUTSIDE"} size={20}/>
                    <Callout left={500} top={635} name={"RED"}/>
                    <Callout left={580} top={660} name={"SECRET"} size={13}/>
                    <Callout left={610} top={595} name={"GARAGE"} size={20}/>
                    <Callout left={480} top={285} name={"RAMP"} size={25}/>
                    <Callout left={555} top={405} name={"HEAVEN"}/>
                    <Callout left={560} top={440} name={"LOCKER"}/>
                    <Callout left={470} top={485} name={"HUT"}/>
                    <Callout left={495} top={560} name={"MAIN"} size={20}/>
                    <Callout left={665} top={398} name={"CT-SPAWN"} size={30}/>
                    <Callout left={470} top={375} name={"BOOST"}/>

                    <Callout left={510} top={440} name={"A"}/>
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default Nuke