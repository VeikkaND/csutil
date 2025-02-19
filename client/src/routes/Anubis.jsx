import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import NavBar from "../components/NavBar";
import ToolBar from "../components/Toolbar";
import Tutorial from "../components/Tutorial";
import anubis from "../../../maps/anubis.png"
import Callout from "../components/Callout";

function Anubis() {

    return(
        <div>
            <NavBar />
            <ToolBar />
            <Tutorial />
            <TransformWrapper doubleClick={{disabled: true}}>
                <TransformComponent wrapperStyle={{margin: "auto"}}>
                    <img src={anubis}></img>

                    <Callout left={310} top={180} name={"CT SPAWN"} size={30}/>
                    <Callout left={400} top={80} name={"BEACH"} size={25}/>
                    <Callout left={510} top={210} name={"TUNNEL"} size={20} rotate={30}/>
                    <Callout left={585} top={200} name={"HEAVEN"} rotate={-50}/>
                    <Callout left={510} top={335} name={"A CONNECTOR"}/>
                    <Callout left={485} top={360} name={"MID"} size={25}/>
                    <Callout left={600} top={300} name={"PLAT"} size={20}/>
                    <Callout left={750} top={220} name={"FOUNTAIN"}/>
                    <Callout left={690} top={175} name={"BACKSITE"}/>
                    <Callout left={730} top={370} name={"MAIN"} size={25}/>

                    <Callout left={610} top={450} name={"BOAT"} size={25}/>
                    <Callout left={480} top={525} name={"WATER"} size={20}/>
                    <Callout left={420} top={520} name={"BRIDGE"} rotate={-90}/>
                    <Callout left={420} top={415} name={"WINDOW"}/>
                    <Callout left={485} top={460} name={"DOORS"}/>
                    <Callout left={690} top={530} name={"UPPER"} size={20}/>
                    <Callout left={580} top={580} name={"STAIRS"}/>
                    <Callout left={655} top={525} name={"WOOD"} size={13} rotate={-50}/>
                    <Callout left={670} top={470} name={"DROP"} size={13}/>
                    <Callout left={300} top={520} name={"CONNECTOR"} rotate={-30}/>

                    <Callout left={245} top={240} name={"SNIPER"} rotate={-20}/>
                    <Callout left={300} top={290} name={"CAVE"}/>
                    <Callout left={340} top={360} name={"PALACE"} size={25}/>
                    <Callout left={213} top={330} name={"STREET"} size={25} rotate={-90}/>
                    <Callout left={250} top={510} name={"PILLAR"}/>
                    <Callout left={310} top={405} name={"BACKSITE"}/>
                    <Callout left={335} top={470} name={"NINJA"} size={13}/>
                    <Callout left={170} top={430} name={"CORNER"}/>

                    <Callout left={380} top={820} name={"T SPAWN"} size={30}/>
                    <Callout left={200} top={560} name={"LONG"} size={25}/>
                    <Callout left={380} top={600} name={"TOP MID"} size={25}/>
                    <Callout left={175} top={495} name={"GATE"}/>
                    <Callout left={135} top={490} name={"IVY"}/>
                    <Callout left={530} top={665} name={"ALLEY"} size={25}/>
                    <Callout left={290} top={680} name={"RUINS"} size={20}/>

                    <Callout left={667} top={220} name={"A"}/>
                    <Callout left={275} top={431} name={"B"}/>
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default Anubis