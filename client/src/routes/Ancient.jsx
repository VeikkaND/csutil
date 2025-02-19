import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import NavBar from "../components/NavBar";
import ToolBar from "../components/Toolbar";
import Tutorial from "../components/Tutorial";
import ancient from "../../../maps/ancient.png"
import Callout from "../components/Callout";

function Ancient() {

    return(
        <div>
            <NavBar />
            <ToolBar />
            <Tutorial />
            <TransformWrapper doubleClick={{disabled: true}}>
                <TransformComponent wrapperStyle={{margin: "auto"}}>
                    <img src={ancient}></img>

                    <Callout left={70} top={135} name={"PLAT"}/>
                    <Callout left={90} top={160} name={"SINGLE"} size={13}/>
                    <Callout left={130} top={195} name={"BIG BOX"} size={13}/>
                    <Callout left={250} top={94} name={"TEMPLE"} size={25}/>
                    <Callout left={70} top={340} name={"A MAIN"} size={25}/>
                    <Callout left={130} top={280} name={"BOOST"}/>
                    <Callout left={210} top={365} name={"DONUT"} size={25}/>
                    <Callout left={330} top={155} name={"CT"} size={20}/>
                    <Callout left={402} top={60} name={"CT SPAWN"} size={30}/>

                    <Callout left={390} top={810} name={"T SPAWN"} size={30}/>
                    <Callout left={125} top={495} name={"STAIRS"}/>
                    <Callout left={230} top={650} name={"SPLIT"} size={20}/>
                    <Callout left={400} top={350} name={"TOP MID"} size={20}/>
                    <Callout left={425} top={450} name={"MID"} size={25}/>
                    <Callout left={500} top={410} name={"PIT"}/>
                    <Callout left={300} top={520} name={"ELBOW"} size={20}/>
                    <Callout left={424} top={290} name={"RED"}/>
                    <Callout left={570} top={200} name={"ALLEY"} size={20}/>

                    <Callout left={680} top={250} name={"SHORT"} size={20}/>
                    <Callout left={820} top={250} name={"LONG"} size={20}/>
                    <Callout left={710} top={355} name={"PILLAR"}/>
                    <Callout left={680} top={435} name={"WOOD"}/>
                    <Callout left={623} top={355} name={"CAVE"} size={25}/>
                    <Callout left={810} top={460} name={"RAMP"} size={25}/>
                    <Callout left={770} top={560} name={"DOORS"}/>
                    <Callout left={570} top={470} name={"CHEETAH"}/>
                    <Callout left={500} top={520} name={"HEAVEN"}/>
                    <Callout left={770} top={620} name={"RUINS"} rotate={-30}/>
                    <Callout left={550} top={730} name={"TUNNEL"}/>
                    <Callout left={665} top={700} name={"WATER"}/>

                    <Callout left={230} top={200} name={"A"}/>
                    <Callout left={770} top={350} name={"B"}/>
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default Ancient