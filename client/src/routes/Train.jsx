import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import NavBar from "../components/NavBar";
import ToolBar from "../components/Toolbar";
import Tutorial from "../components/Tutorial";
import train from "../../../maps/train.png"
import Callout from "../components/Callout";
import Smoke from "../components/Smoke";
import Origin from "../components/Origin";

function Train() {

    return(
        <div>
            <NavBar />
            <ToolBar />
            <Tutorial />
            <TransformWrapper doubleClick={{disabled: true}}>
                <TransformComponent wrapperStyle={{margin: "auto"}}>
                    <img src={train}></img>

                    <Smoke left={527} top={500} name={"Connector - A"}/>
                    <Smoke left={620} top={590} name={"Connector - B"}/>
                    <Smoke left={530} top={670} name={"B Site 2"}/>
                    <Smoke left={465} top={670} name={"B Site 1"}/>
                    <Smoke left={395} top={780} name={"B Heaven Lurk"}/>
                    <Smoke left={645} top={385} name={"Camera"}/>
                    <Smoke left={350} top={320} name={"Main"}/>
                    <Smoke left={380} top={500} name={"Pop Dog"}/>
                    <Smoke left={520} top={340} name={"Red-Yellow"}/>
                    <Smoke left={460} top={612} name={"Lower"}/>

                    <Origin left={180} top={120} parent={"Connector - A"} style={"jt"}
                    name={"aconn"} url={""}/>
                    <Origin left={240} top={690} parent={"Connector - B"} style={"tr"}
                    name={"bconn"} url={""}/>
                    <Origin left={253} top={670} parent={"B Site 2"} style={"jt2"}
                    name={"bsite2"} url={""}/>
                    <Origin left={265} top={675} parent={"B Site 1"} style={"jt"}
                    name={"bsite1"} url={""}/>
                    <Origin left={310} top={800} parent={"B Heaven Lurk"} style={"t"}
                    name={"blurk"} url={""}/>
                    <Origin left={98} top={120} parent={"Camera"} style={"jtr"}
                    name={"camera"} url={""}/>
                    <Origin left={865} top={670} parent={"Main"} style={"jtr"}
                    name={"main"} url={""} info={"Throw when crosshair reaches the gutter"} ct={true}/>
                    <Origin left={410} top={140} parent={"Pop Dog"} style={"t"}
                    name={"popdog"} url={""}/>
                    <Origin left={98} top={120} parent={"Red-Yellow"} style={"jt"}
                    name={"redyellow"} url={""}/>
                    <Origin left={265} top={615} parent={"Lower"} style={"t"}
                    name={"shortlower"} url={""} info={"Crouch while throwing"}/>

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