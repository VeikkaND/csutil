import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import NavBar from "../components/NavBar";
import ToolBar from "../components/Toolbar";
import Tutorial from "../components/Tutorial";
import train from "../../../maps/train.png"
import Callout from "../components/Callout";

function Train() {

    return(
        <div>
            <NavBar />
            <ToolBar />
            <Tutorial />
            <TransformWrapper doubleClick={{disabled: true}}>
                <TransformComponent wrapperStyle={{margin: "auto"}}>
                    <img src={train}></img>

                    <Callout left={60} top={135} name={"T SPAWN"} size={30}/>
                    <Callout left={370} top={135} name={"DUMPSTER"}/>
                    <Callout left={500} top={110} name={"ALLEY"}/>
                    <Callout left={700} top={100} name={"PIGEON"} size={20}/>
                    <Callout left={715} top={185} name={"IVY"} size={25}/>
                    <Callout left={310} top={200} name={"OUTSIDE MAIN"}/>

                    <Callout left={260} top={240} name={"T STAIRS"}/>
                    <Callout left={228} top={390} name={"LONG HALL"} size={25} rotate={-90}/>
                    <Callout left={340} top={330} name={"MAIN"} size={25}/>
                    <Callout left={220} top={515} name={"UNDERPASS"}/>
                    <Callout left={380} top={520} name={"POP DOG"} size={20}/>
                    <Callout left={315} top={420} name={"SHOWERS"}/>
                    <Callout left={315} top={260} name={"KITCHEN"}/>

                    <Callout left={240} top={680} name={"B HALLS"} size={25} rotate={-90}/>
                    <Callout left={340} top={625} name={"LOWER"} size={20}/>
                    <Callout left={320} top={810} name={"UPPER"} size={20}/>
                    <Callout left={400} top={720} name={"DEFAULT"} size={13}/>
                    <Callout left={460} top={662} name={"BLUE"}/>
                    <Callout left={605} top={662} name={"RED"}/>
                    <Callout left={540} top={775} name={"OIL"}/>
                    <Callout left={560} top={810} name={"CAT"} size={20}/>
                    <Callout left={380} top={760} name={"LADDER"} size={12}/>
                    <Callout left={630} top={720} name={"BACK SITE"} size={20}/>

                    <Callout left={540} top={570} name={"CONNECTOR"} size={20}/>
                    <Callout left={415} top={435} name={"E BOX"}/>
                    <Callout left={450} top={380} name={"RED"} size={25} rotate={-15}/>
                    <Callout left={410} top={300} name={"OLOF"}/>
                    <Callout left={580} top={337} name={"YELLOW"} size={20}/>
                    <Callout left={625} top={400} name={"CAMERA"} size={20}/>
                    <Callout left={595} top={290} name={"HELL"}/>
                    <Callout left={740} top={335} name={"A1"} size={25}/>
                    <Callout left={740} top={460} name={"A2"} size={25}/>

                    <Callout left={740} top={710} name={"CT SPAWN"} size={30}/>
                    <Callout left={820} top={610} name={"CT STAIRS"}/>

                    <Callout left={573} top={455} name={"A"}/>
                    <Callout left={480} top={710} name={"B"}/>
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default Train