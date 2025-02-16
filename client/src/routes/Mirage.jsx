import { TransformComponent, 
    TransformWrapper } from "react-zoom-pan-pinch";
import NavBar from "../components/NavBar";
import ToolBar from "../components/Toolbar";
import mirage from "../../../maps/mirage.png"
import Callout from "../components/Callout";


function Mirage() {

    return(
        <div>
            <NavBar />
            <ToolBar />
            <TransformWrapper doubleClick={{disabled: true}}>
                <TransformComponent wrapperStyle={{margin: "auto"}}>
                    <img src={mirage}></img>

                    <Callout left={735} top={315} name={"T SPAWN"} size={30}/>
                    <Callout left={590} top={360} name={"TOP MID"}/>
                    <Callout left={505} top={447} name={"CHAIR"} size={14}/>
                    <Callout left={470} top={365} name={"CATWALK"}/>
                    <Callout left={460} top={400} name={"MID"} size={30}/>

                    <Callout left={570} top={145} name={"T APPS"}/>
                    <Callout left={270} top={155} name={"B APPS"} size={25}/>
                    <Callout left={430} top={217} name={"STAIRS"}/>
                    <Callout left={380} top={255} name={"SHORT"} size={23}/>
                    <Callout left={353} top={365} name={"UNDERPASS"} rotate={90} size={14}/>

                    <Callout left={345} top={310} name={"LADDER"}/>
                    <Callout left={315} top={400} name={"WINDOW"}/>
                    <Callout left={315} top={525} name={"JUNGLE"} size={25}/>
                    <Callout left={400} top={480} name={"CONNECTOR"}/>

                    <Callout left={445} top={540} name={"STAIRS"}/>
                    <Callout left={540} top={555} name={"TETRIS"}/>
                    <Callout left={630} top={575} name={"RAMP"}/>
                    <Callout left={480} top={570} name={"SANDWICH"} size={11}/>
                    <Callout left={580} top={700} name={"PALACE"}/>
                    <Callout left={550} top={645} name={"SHADOW"}/>
                    <Callout left={500} top={715} name={"FIREBOX"} rotate={-30}/>
                    <Callout left={465} top={700} name={"NINJA"} rotate={-30}/>
                    <Callout left={440} top={640} name={"TRIPLE"}/>
                    <Callout left={385} top={755} name={"TICKET"}/>

                    <Callout left={335} top={705} name={"CT"} size={25}/>
                    <Callout left={190} top={620} name={"CT SPAWN"} size={30}/>
                    <Callout left={180} top={390} name={"MARKET"} size={20}/>
                    <Callout left={190} top={350} name={"B WINDOW"} size={14}/>
                    <Callout left={135} top={340} name={"DOOR"}/>
                    <Callout left={100} top={235} name={"BENCH"}/>
                    <Callout left={150} top={165} name={"VAN"}/>
                    <Callout left={275} top={215} name={"ARCHES"}/>
                    <Callout left={270} top={300} name={"E BOX"}/>

                    <Callout left={475} top={665} name={"A"}/>
                    <Callout left={195} top={240} name={"B"}/>
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default Mirage