import { useSelector } from "react-redux"
import { TransformWrapper, 
    TransformComponent } from "react-zoom-pan-pinch"
import ToolBar from "../components/Toolbar"
import Smoke from "../components/Smoke"
import dust2 from "../../../maps/dust2.png"
import NavBar from "../components/NavBar"
import Origin from "../components/Origin"
import Callout from "../components/Callout"

function Dust2() {


    return(
    <div>
        <NavBar />
        <ToolBar /> 
        <TransformWrapper doubleClick={{disabled: true}}>
            <TransformComponent wrapperStyle={{margin: "auto"}}>
                <img src={dust2}></img>
                <Smoke left={210} top={200} name={"bdoor"}/>
                <Smoke left={80} top={280} name={"tunnel1"}/>
                <Smoke left={500} top={300} name={"test_spot"}/>
                <Origin left={450} top= {370} 
                parent={"test_spot"} rotate={40}/>
                <Callout left={195} top={180} name={"B DOORS"}/>
                <Callout left={175} top={275} name={"CAR"}/>
                <Callout left={210} top={105} name={"WINDOW"}/>
                <Callout left={80} top={100} name={"B PLAT"}/>
                <Callout left={50} top={50} name={"BACK PLAT"}/>
                <Callout left={105} top={165} name={"BIG BOX"}/>
                <Callout left={135} top={310} name={"CLOSET"}/>
                <Callout left={35} top={200} name={"FENCE"}/>
                <Callout left={30} top={270} name={"CLOSE"}/>

                <Callout left={350} top={180} name={"CT MID"}/>
                <Callout left={365} top={300} name={"MID DOORS"}/>
                <Callout left={510} top={170} name={"CT SPAWN"}/>
                <Callout left={410} top={370} name={"XBOX"}/>
                <Callout left={500} top={350} name={"SHORT"}/>
                <Callout left={260} top={355} name={"LOWER TUNNELS"}/>
                <Callout left={545} top={300} name={"STAIRS"}/>

                <Callout left={570} top={75} name={"NINJA"}/>
                <Callout left={610} top={120} name={"A PLAT"}/>
                <Callout left={680} top={35} name={"GOOSE"}/>
                <Callout left={730} top={58} name={"BARRELS"}/>
                <Callout left={760} top={140} name={"RAMP"}/>
                <Callout left={835} top={210} name={"CAR"}/>
                <Callout left={755} top={330} name={"LONG"}/>
                <Callout left={710} top={210} name={"CROSS"}/>
                <Callout left={610} top={170} name={"BOOST"}/>
                <Callout left={765} top={550} name={"PIT"}/>
                <Callout left={680} top={530} name={"SIDE PIT"}/>
                <Callout left={810} top={520} name={"PIT PLAT"}/>
                <Callout left={630} top={410} name={"BLUE"}/>
                <Callout left={575} top={535} name={"LONG DOORS"}/>

                <Callout left={100} top={410} name={"UPPER TUNNELS"}/>
                <Callout left={90} top={600} name={"OUTSIDE TUNNELS"}/>
                <Callout left={160} top={700} name={"T PLAT"}/>

                <Callout left={525} top={680} name={"OUTSIDE LONG"}/>
                <Callout left={440} top={560} name={"TOP MID"}/>
                <Callout left={350} top={560} name={"GREEN"}/>
                <Callout left={450} top={450} name={"CAT"}/>
                <Callout left={400} top={470} name={"MID"}/>
                <Callout left={375} top={700} name={"SUICIDE"}/>
                <Callout left={315} top={800} name={"T SPAWN"}/>
            </TransformComponent>
        </TransformWrapper>
    </div>
    )
}

export default Dust2