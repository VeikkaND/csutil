import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import NavBar from "../components/NavBar";
import ToolBar from "../components/Toolbar";
import Tutorial from "../components/Tutorial";
import anubis from "/maps/anubis.png";
import Callout from "../components/Callout";
import Smoke from "../components/Smoke";
import Origin from "../components/Origin";

function Anubis() {

    return(
        <div>
            <NavBar />
            <ToolBar />
            <Tutorial />
            <TransformWrapper doubleClick={{disabled: true}}>
                <TransformComponent wrapperStyle={{margin: "auto"}}>
                    <img src={anubis}></img>

                    <Smoke left={290} top={480} name={"Connector"}/>
                    <Smoke left={550} top={315} name={"A Connector"}/>
                    <Smoke left={350} top={520} name={"Connector - Water"}/>
                    <Smoke left={615} top={165} name={"Heaven"}/>
                    <Smoke left={280} top={350} name={"Palace"}/>
                    <Smoke left={595} top={270} name={"Plat"}/>
                    <Smoke left={225} top={350} name={"Street"}/>
                    <Smoke left={430} top={400} name={"Window"}/>

                    <Origin left={205} top={615} parent={"Connector"} style={"t"}
                    name={"bconn"} url={"https://www.youtube.com/embed/SphV38sFgJ0?si=7JQzQh8h2DdO5N8O"}/>
                    <Origin left={685} top={460} parent={"A Connector"} style={"t"}
                    name={"camera"} url={"https://www.youtube.com/embed/zCxynlX-kno?si=VAxZa2uiOkFTxYB7"}/>
                    <Origin left={605} top={690} parent={"Connector - Water"} style={"jt"}
                    name={"connwater"} url={"https://www.youtube.com/embed/wWZQwEahY_g?si=ItwNOqIdROMQn9DJ"}/>
                    <Origin left={660} top={445} parent={"Heaven"} style={"jt"}
                    name={"heaven"} url={"https://www.youtube.com/embed/aUG54yUgMms?si=OnIFXMUxvuilp1r6"}/>
                    <Origin left={300} top={800} parent={"Palace"} style={"jt"}
                    name={"palace"} url={"https://www.youtube.com/embed/tTpgJKFX9TM?si=syP5qyv--PWdvD3R"}/>
                    <Origin left={660} top={445} parent={"Plat"} style={"jt"}
                    name={"plat"} url={"https://www.youtube.com/embed/h73w5h1QLNk?si=h_W-emr0AIlTB10j"}/>
                    <Origin left={225} top={635} parent={"Street"} style={"t"}
                    name={"street"} url={"https://www.youtube.com/embed/Z2dfcKxYlr8?si=NEU5e-QlCIRqNQEg"}/>
                    <Origin left={465} top={860} parent={"Window"} style={"jt"}
                    name={"window"} url={"https://www.youtube.com/embed/hz6YSPWe5P0?si=COOtNJJNdNKW6z_Y"}/>

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